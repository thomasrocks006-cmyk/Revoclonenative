import { act } from '@testing-library/react-native';
import { usePortfolioStore } from '../portfolio';

const initial = { cash: 2.19, crypto: 2.1, invest: 0 };

describe('usePortfolio actions', () => {
  beforeEach(() => {
    usePortfolioStore.setState(initial);
  });

  test('addCash increases cash', () => {
    act(() => {
      usePortfolioStore.getState().addCash(5);
    });
    expect(usePortfolioStore.getState().cash).toBeCloseTo(7.19);
  });

  test('withdrawCash decreases cash when sufficient', () => {
    act(() => {
      usePortfolioStore.getState().withdrawCash(1);
    });
    expect(usePortfolioStore.getState().cash).toBeCloseTo(1.19);
  });

  test('withdrawCash does not go below zero', () => {
    act(() => {
      usePortfolioStore.getState().withdrawCash(5);
    });
    expect(usePortfolioStore.getState().cash).toBeCloseTo(2.19);
  });

  test('tradeCrypto updates crypto without going negative', () => {
    act(() => {
      usePortfolioStore.getState().tradeCrypto(-1);
    });
    expect(usePortfolioStore.getState().crypto).toBeCloseTo(1.1);
    act(() => {
      usePortfolioStore.getState().tradeCrypto(-5);
    });
    expect(usePortfolioStore.getState().crypto).toBeCloseTo(1.1);
  });

  test('changeInvest updates invest without going negative', () => {
    act(() => {
      usePortfolioStore.getState().changeInvest(5);
    });
    expect(usePortfolioStore.getState().invest).toBeCloseTo(5);
    act(() => {
      usePortfolioStore.getState().changeInvest(-10);
    });
    expect(usePortfolioStore.getState().invest).toBeCloseTo(5);
  });
});

