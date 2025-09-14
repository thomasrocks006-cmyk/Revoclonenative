import React, { createContext, useContext, useEffect, useMemo, useCallback, useState, ReactNode } from "react";

type PortfolioState = {
  cash: number;
  crypto: number;
  invest: number;
  tradeCrypto: (delta: number) => void;
  changeInvest: (delta: number) => void;
};

const PortfolioContext = createContext<PortfolioState | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [cash, setCash] = useState<number>(2.19);
  const [crypto, setCrypto] = useState<number>(2.1);
  const [invest, setInvest] = useState<number>(6.74);

  const tradeCrypto = useCallback((delta: number) => {
    setCrypto((c) => c + delta);
  }, []);

  const changeInvest = useCallback((delta: number) => {
    setInvest((v) => v + delta);
  }, []);

  // Periodic small market simulation for crypto/invest
  useEffect(() => {
    const id = setInterval(() => {
      const cryptoDelta = (Math.random() - 0.5) * 0.1;
      const investDelta = (Math.random() - 0.5) * 0.1;
      setCrypto((c) => c + cryptoDelta);
      setInvest((v) => v + investDelta);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const value = useMemo<PortfolioState>(
    () => ({ cash, crypto, invest, tradeCrypto, changeInvest }),
    [cash, crypto, invest, tradeCrypto, changeInvest]
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

// Overloads to support both selector style and full object
export function usePortfolio(): PortfolioState;
export function usePortfolio<T>(selector: (s: PortfolioState) => T): T;
export function usePortfolio<T>(selector?: (s: PortfolioState) => T) {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return selector ? selector(ctx) : ctx;
}
