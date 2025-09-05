import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ProductsWidget() {
  const products = [
    {
      id: "stocks",
      name: "Stocks",
      icon: "📈", // Simple emoji replacement for TrendingUp
    },
    {
      id: "etfs",
      name: "ETFs", 
      icon: "📊", // Simple emoji replacement for PieChart
    },
    {
      id: "commodities",
      name: "Commodities",
      icon: "📦", // Simple emoji replacement for Ingot
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Products</Text>

      <View style={styles.productsGrid}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productButton}
            activeOpacity={0.8}
          >
            <View style={styles.productContent}>
              <Text style={styles.iconText}>{product.icon}</Text>
              <Text style={styles.productName}>{product.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  headerText: {
    color: '#94a3b8', // slate-400
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
  },
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  productButton: {
    flex: 1,
    backgroundColor: '#334155', // slate-700
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContent: {
    alignItems: 'center',
    gap: 12,
  },
  iconText: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  productName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});