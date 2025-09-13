import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type Portfolio = {
  crypto: number;
  invest: number;
};

export type PortfolioContextType = Portfolio & {
  applyDelta: (delta: Partial<Portfolio>) => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolio, setPortfolio] = useState<Portfolio>({ crypto: 2.1, invest: 6.74 });

  const applyDelta = useCallback((delta: Partial<Portfolio>) => {
    setPortfolio(prev => ({
      crypto: prev.crypto + (delta.crypto ?? 0),
      invest: prev.invest + (delta.invest ?? 0),
    }));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      applyDelta({
        crypto: (Math.random() - 0.5) * 0.1,
        invest: (Math.random() - 0.5) * 0.1,
      });
    }, 5000);
    return () => clearInterval(id);
  }, [applyDelta]);

  return (
    <PortfolioContext.Provider value={{ ...portfolio, applyDelta }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
};

