import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface TradedStock {
  id: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  buyPercentage: number;
  sellPercentage: number;
  logo: React.ReactNode;
}

export interface MostTradedWidgetProps {
  stocks: TradedStock[];
}

export function MostTradedWidget({ stocks }: MostTradedWidgetProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Most traded this week</Text>
        <View style={styles.chevronRight}>
          <Text style={styles.chevronText}>›</Text>
        </View>
      </View>

      {/* Stock List */}
      <View style={styles.stocksList}>
        {stocks.map((stock, index) => (
          <View key={stock.id} style={styles.stockItem}>
            <View style={styles.stockContent}>
              {/* Logo */}
              <View style={styles.logoContainer}>
                {stock.logo}
              </View>

              {/* Stock Info */}
              <View style={styles.stockInfo}>
                <Text style={styles.symbolText}>{stock.symbol}</Text>
                <Text style={styles.buySellText}>
                  {stock.buyPercentage}% Buys • {stock.sellPercentage}% Sells
                </Text>
              </View>
            </View>

            {/* Price and Change */}
            <View style={styles.priceSection}>
              <Text style={styles.priceText}>{stock.price}</Text>
              <View style={styles.changeRow}>
                <View
                  style={[
                    styles.arrow,
                    stock.isPositive ? styles.upArrow : styles.downArrow,
                  ]}
                />
                <Text
                  style={[
                    styles.changeText,
                    { color: stock.isPositive ? "#22c55e" : "#ef4444" }, // green-500 : red-500
                  ]}
                >
                  {stock.change}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* See All Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b', // slate-800
    borderRadius: 24,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerText: {
    color: '#94a3b8', // slate-400
    fontSize: 18,
    fontWeight: '500',
  },
  chevronRight: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronText: {
    color: '#64748b', // slate-500
    fontSize: 16,
    fontWeight: 'bold',
  },
  stocksList: {
    marginBottom: 24,
  },
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  stockContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  stockInfo: {
    flex: 1,
  },
  symbolText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
  },
  buySellText: {
    color: '#94a3b8', // slate-400
    fontSize: 14,
  },
  priceSection: {
    alignItems: 'flex-end',
  },
  priceText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  arrow: {
    width: 0,
    height: 0,
  },
  upArrow: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#22c55e', // green-500
  },
  downArrow: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ef4444', // red-500
  },
  changeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  seeAllButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  seeAllText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
});