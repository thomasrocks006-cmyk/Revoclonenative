import { create } from 'zustand';
import React, { createContext, useContext, ReactNode } from 'react';

export type PortfolioState = {
  cash: number;
  crypto: number;
  invest: number;
};

export type PortfolioActions = {
  addCash: (amount: number) => void;
  withdrawCash: (amount: number) => void;
  tradeCrypto: (delta: number) => void;
  changeInvest: (delta: number) => void;
};

const initialState: PortfolioState = {
  cash: 0,
  crypto: 5.85,
  invest: 6.74,
};

// Create the Zustand store
const usePortfolioStore = create<PortfolioState & PortfolioActions>((set) => ({
  ...initialState,
  addCash: (amount) => set((state) => ({ cash: state.cash + amount })),
  withdrawCash: (amount) => set((state) => ({ cash: state.cash - amount })),
  tradeCrypto: (delta) => set((state) => ({ crypto: state.crypto + delta })),
  changeInvest: (delta) => set((state) => ({ invest: state.invest + delta })),
}));

// Context wrapper so components can access via provider if needed
const StoreContext = createContext<typeof usePortfolioStore | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return React.createElement(StoreContext.Provider, { value: usePortfolioStore }, children);
}

export function usePortfolio<T>(selector: (state: PortfolioState & PortfolioActions) => T): T {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return store(selector);
}

export { usePortfolioStore };
