import { create } from 'zustand';
import React from 'react';

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

// Backward-compatible alias with the name used on main
export type Portfolio = PortfolioState;

const initialState: PortfolioState = {
  cash: 2.19,
  crypto: 2.1,
  invest: 0,
};

export const usePortfolioStore = create<PortfolioState & PortfolioActions>((set) => ({
  ...initialState,
  addCash: (amount) => set((state) => ({ cash: state.cash + amount })),
  withdrawCash: (amount) =>
    set((state) =>
      state.cash >= amount ? { cash: state.cash - amount } : { cash: state.cash }
    ),
  tradeCrypto: (delta) =>
    set((state) => {
      const next = state.crypto + delta;
      return next >= 0 ? { crypto: next } : {};
    }),
  changeInvest: (delta) =>
    set((state) => {
      const next = state.invest + delta;
      return next >= 0 ? { invest: next } : {};
    }),
}));

// Overloaded hook:
// - usePortfolio() -> returns just the balances (Portfolio)
// - usePortfolio(selector) -> selector gets state + actions
export function usePortfolio(): Portfolio;
export function usePortfolio<T>(selector: (state: PortfolioState & PortfolioActions) => T): T;
export function usePortfolio<T>(
  selector?: (state: PortfolioState & PortfolioActions) => T
): Portfolio | T {
  if (selector) {
    return usePortfolioStore(selector);
  }
  return usePortfolioStore((s) => ({ cash: s.cash, crypto: s.crypto, invest: s.invest })) as Portfolio;
}

// Convenience hook for just the actions
export function usePortfolioActions(): PortfolioActions {
  return usePortfolioStore((s) => ({
    addCash: s.addCash,
    withdrawCash: s.withdrawCash,
    tradeCrypto: s.tradeCrypto,
    changeInvest: s.changeInvest,
  }));
}

// No-op provider kept for API compatibility with main; Zustand does not require a provider.
export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(React.Fragment, null, children);
};
