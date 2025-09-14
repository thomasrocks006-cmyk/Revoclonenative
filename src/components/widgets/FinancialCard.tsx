import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface StockItem {
  id: string;
  name: string;
  symbol: string;
  shares: string;
  currentPrice: string;
  portfolioValue: string;
  change: string;
  isPositive: boolean;
  logo: React.ReactNode;
}

export interface FinancialCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  change: string;
  isPositive: boolean;
  stocks?: StockItem[];
}

export function FinancialCard({ icon, title, price, change, isPositive, stocks }: FinancialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.8}
      >
        <View style={styles.headerContent}>
          {/* Icon Circle */}
          <View style={styles.iconContainer}>
            {icon}
          </View>

          {/* Content */}
          <View style={styles.mainContent}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>{price}</Text>
              <View style={styles.changeRow}>
                <Text style={styles.trendIcon}>
                  {isPositive ? "↗" : "↘"}
                </Text>
                <Text style={[
                  styles.changeText,
                  { color: isPositive ? "#10b981" : "#ef4444" } // emerald-500 : red-500
                ]}>
                  {change}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.chevronDown, isExpanded && styles.chevronExpanded]}>
          <Text style={styles.chevronText}>⌄</Text>
        </View>
      </TouchableOpacity>

      {/* Expandable Content */}
      {isExpanded && stocks && (
        <View style={styles.expandedContent}>
          <View style={styles.stocksList}>
            {stocks.map((stock, index) => (
              <View key={stock.id} style={styles.stockItem}>
                <View style={styles.stockInfo}>
                  {/* Stock Logo */}
                  <View style={styles.stockLogo}>
                    {stock.logo}
                  </View>

                  {/* Stock Details */}
                  <View style={styles.stockDetails}>
                    <Text style={styles.stockName}>{stock.name}</Text>
                    <Text style={styles.stockMeta}>
                      {stock.shares} {stock.symbol} • {stock.currentPrice}
                    </Text>
                  </View>
                </View>

                {/* Price and Change */}
                <View style={styles.stockPriceSection}>
                  <Text style={styles.stockPortfolioValue}>{stock.portfolioValue}</Text>
                  <View style={styles.stockChangeRow}>
                    <Text style={styles.stockTrendIcon}>
                      {stock.isPositive ? "↗" : "↘"}
                    </Text>
                    <Text style={[
                      styles.stockChangeText,
                      { color: stock.isPositive ? "#10b981" : "#ef4444" }
                    ]}>
                      {stock.change}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b', // slate-800
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#334155', // slate-700
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceText: {
    color: '#94a3b8', // slate-400
    fontSize: 18,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendIcon: {
    fontSize: 16,
    color: '#10b981', // Will be overridden conditionally
  },
  changeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  chevronDown: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  chevronText: {
    color: '#64748b', // slate-500
    fontSize: 16,
  },
  expandedContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  stocksList: {
    gap: 16,
  },
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  stockLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155', // slate-700
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  stockDetails: {
    flex: 1,
  },
  stockName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  stockMeta: {
    color: '#94a3b8', // slate-400
    fontSize: 14,
  },
  stockPriceSection: {
    alignItems: 'flex-end',
  },
  stockPortfolioValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  stockChangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stockTrendIcon: {
    fontSize: 12,
    color: '#10b981', // Will be overridden conditionally
  },
  stockChangeText: {
    fontSize: 14,
  },
});
