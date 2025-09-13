import React, { createContext, useContext } from "react";

export type Portfolio = {
  cash: number;
  crypto: number;
  invest: number;
};

const PortfolioContext = createContext<Portfolio>({
  cash: 2.19,
  crypto: 2.1,
  invest: 0,
});

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  const value = { cash: 2.19, crypto: 2.1, invest: 0 };
  return React.createElement(PortfolioContext.Provider, { value }, children);
};
