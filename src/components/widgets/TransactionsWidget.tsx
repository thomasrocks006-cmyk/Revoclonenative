import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface Transaction {
  id: string;
  action: string;
  symbol: string;
  shares: string;
  price: string;
  timestamp: string;
  amount: string;
  logo: React.ReactNode;
}

export interface TransactionsWidgetProps {
  transactions: Transaction[];
}

export function TransactionsWidget({ transactions }: TransactionsWidgetProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
        <View style={styles.chevronRight}>
          <Text style={styles.chevronText}>›</Text>
        </View>
      </View>

      {/* Transactions List */}
      <View style={styles.transactionsList}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionContent}>
              {/* Logo */}
              <View style={styles.logoContainer}>
                {transaction.logo}
              </View>

              {/* Transaction Details */}
              <View style={styles.transactionDetails}>
                <Text style={styles.actionText}>
                  {transaction.action} {transaction.symbol}
                </Text>
                <Text style={styles.sharesText}>
                  {transaction.shares} shares • {transaction.price}
                </Text>
                <Text style={styles.timestampText}>{transaction.timestamp}</Text>
              </View>
            </View>

            {/* Amount */}
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>{transaction.amount}</Text>
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
  transactionsList: {
    marginBottom: 24,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  transactionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  actionText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
  },
  sharesText: {
    color: '#94a3b8', // slate-400
    fontSize: 14,
    marginBottom: 2,
  },
  timestampText: {
    color: '#64748b', // slate-500
    fontSize: 14,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amountText: {
    color: '#ffffff',
    fontSize: 18,
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
