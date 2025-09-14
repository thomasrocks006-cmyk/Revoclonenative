import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface Stock {
  id: string;
  symbol: string;
  change: string;
  logo: React.ReactNode;
}

export interface TopMoversWidgetProps {
  topGainers: Stock[];
  topLosers: Stock[];
}

export function TopMoversWidget({ topGainers, topLosers }: TopMoversWidgetProps) {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers");

  const currentStocks = activeTab === "gainers" ? topGainers : topLosers;

  return (
    <View style={styles.container}>
      <View style={styles.sheen} pointerEvents="none" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Today's top movers</Text>
        <View style={styles.chevronRight}>
          <Text style={styles.chevronText}>{">"}</Text>
        </View>
      </View>

      {/* Toggle Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("gainers")}
          style={[
            styles.tabButton,
            activeTab === "gainers" ? styles.activeTab : styles.inactiveTab,
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "gainers" ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            Top gainers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("losers")}
          style={[
            styles.tabButton,
            activeTab === "losers" ? styles.activeTab : styles.inactiveTab,
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "losers" ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            Top losers
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stocks Grid */}
      <View style={styles.stocksGrid}>
        {currentStocks.map((stock, index) => (
          <View key={stock.id} style={styles.stockItem}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              {stock.logo}
            </View>

            {/* Symbol */}
            <Text style={styles.symbolText}>{stock.symbol}</Text>

            {/* Change */}
            <View style={styles.changeContainer}>
              <View
                style={[
                  styles.arrow,
                  activeTab === "gainers" ? styles.upArrow : styles.downArrow,
                ]}
              />
              <Text
                style={[
                  styles.changeText,
                  { color: activeTab === "gainers" ? "#4ade80" : "#f87171" }, // green-400 : red-400
                ]}
              >
                {stock.change}
              </Text>
            </View>
          </View>
        ))}
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'transparent',
  borderRadius: 24,
  padding: 24,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.25)',
    overflow: 'hidden',
  },
  sheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    opacity: 0.35,
    backgroundColor: 'rgba(255,255,255,0.6)',
    // web-only diagonal gradient sheen
    // @ts-ignore
    ...(typeof document !== 'undefined' ? {
      // @ts-ignore
      background: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 60%)'
    } : {}),
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
  tabContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999, // fully rounded
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#475569', // slate-600
  },
  inactiveTab: {
    backgroundColor: '#334155', // slate-700
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#ffffff',
  },
  inactiveTabText: {
    color: '#94a3b8', // slate-400
  },
  stocksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  stockItem: {
    width: '22%', // Approximately 4 columns with gaps
    alignItems: 'center',
    gap: 8,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  symbolText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  arrow: {
    width: 0,
    height: 0,
  },
  upArrow: {
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4ade80', // green-400
  },
  downArrow: {
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#f87171', // red-400
  },
  changeText: {
    fontSize: 12,
    fontWeight: '500',
  },
});