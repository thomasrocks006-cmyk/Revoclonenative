import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { Search, BarChart2, Globe } from "lucide-react-native";
import { usePortfolio } from "../store/portfolio";

const { width } = Dimensions.get("window");

export default function Crypto() {
  const { crypto } = usePortfolio();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#9333ea", "#2563eb", "#1e40af"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Unified header (TF avatar, search bar, BarChart2, Globe) */}
          <View style={styles.header}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>TF</Text>
            </View>
            <View style={styles.searchContainer}>
              <Search size={16} color="#9CA3AF" style={styles.searchIcon} />
              <TextInput placeholder="Search" placeholderTextColor="#D1D5DB" style={styles.searchInput} />
            </View>
            <TouchableOpacity style={styles.headerButton}>
              <BarChart2 size={16} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Globe size={16} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Balance Section */}
          <View style={styles.balanceSection}>
            <Text style={styles.balanceAmount}>${crypto.toFixed(2)}</Text>
            <Text style={styles.balanceChange}>+0.00 • 0%</Text>
          </View>
// ...existing code...

          {/* Chart */}
          <View style={styles.chartContainer}>
            <Svg width={width - 32} height={120} viewBox="0 0 300 100">
              <Path d="M 0 80 Q 50 70 100 65 T 200 60 T 300 50" stroke="white" strokeWidth="2" fill="none" />
            </Svg>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <View style={styles.actionButton}>
              <TouchableOpacity style={styles.actionButtonCircle}>
                <Text style={styles.actionButtonIcon}>📈</Text>
              </TouchableOpacity>
              <Text style={styles.actionButtonText}>Trade</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity style={styles.actionButtonCircle}>
                <Text style={styles.actionButtonIcon}>↙️</Text>
              </TouchableOpacity>
              <Text style={styles.actionButtonText}>Receive</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity style={styles.actionButtonCircle}>
                <Text style={styles.actionButtonIcon}>📤</Text>
              </TouchableOpacity>
              <Text style={styles.actionButtonText}>Send</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity style={styles.actionButtonCircle}>
                <Text style={styles.actionButtonIcon}>⋯</Text>
              </TouchableOpacity>
              <Text style={styles.actionButtonText}>More</Text>
            </View>
          </View>

          {/* Portfolio Section */}
          <View style={styles.portfolioSection}>
            {/* Ether */}
            <View style={styles.portfolioItem}>
              <View style={styles.portfolioLeft}>
                <View style={[styles.cryptoIcon, { backgroundColor: "#3b82f6" }]}> 
                  <Text style={styles.cryptoIconText}>Ξ</Text>
                </View>
                <View>
                  <Text style={styles.cryptoName}>Ether</Text>
                  <Text style={styles.cryptoDetails}>0.0031 ETH • $6,687.60</Text>
                </View>
              </View>
              <View style={styles.portfolioRight}>
                <Text style={styles.cryptoValue}>$2.12</Text>
                <Text style={styles.cryptoChangePositive}>+0.55%</Text>
              </View>
            </View>

            {/* Bitcoin */}
            <View style={styles.portfolioItem}>
              <View style={styles.portfolioLeft}>
                <View style={[styles.cryptoIcon, { backgroundColor: "#f97316" }]}> 
                  <Text style={styles.cryptoIconText}>₿</Text>
                </View>
                <View>
                  <Text style={styles.cryptoName}>Bitcoin</Text>
                  <Text style={styles.cryptoDetails}>0.00001 BTC • $109,263</Text>
                </View>
              </View>
              <View style={styles.portfolioRight}>
                <Text style={styles.cryptoValue}>$2.02</Text>
                <Text style={styles.cryptoChangePositive}>+0.92%</Text>
              </View>
            </View>

            {/* Official Trump */}
            <View style={styles.portfolioItem}>
              <View style={styles.portfolioLeft}>
                <View style={[styles.cryptoIcon, { backgroundColor: "#dc2626" }]}> 
                  <Text style={styles.cryptoIconTextSmall}>🇺🇸</Text>
                </View>
                <View>
                  <Text style={styles.cryptoName}>OFFICIAL TRUMP</Text>
                  <Text style={styles.cryptoDetails}>0.15 TRUMP • $12.09</Text>
                </View>
              </View>
              <View style={styles.portfolioRight}>
                <Text style={styles.cryptoValue}>$1.71</Text>
                <Text style={styles.cryptoChangeNegative}>-5.1%</Text>
              </View>
            </View>

            {/* Transactions */}
            <View style={styles.transactionsSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Transactions</Text>
                <Text style={styles.sectionArrow}>↗️</Text>
              </View>

              <View style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <View style={[styles.transactionIcon, { backgroundColor: "#dc2626" }]}> 
                    <Text style={styles.transactionIconText}>🇺🇸</Text>
                  </View>
                  <View>
                    <Text style={styles.transactionTitle}>AUD → TRUMP</Text>
                    <Text style={styles.transactionDate}>1 September, 09:31</Text>
                  </View>
                </View>
                <View style={styles.transactionRight}>
                  <Text style={styles.transactionAmount}>+0.13 TRUMP</Text>
                  <Text style={styles.transactionValue}>-$3.80</Text>
                </View>
              </View>

              <View style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <View style={[styles.transactionIcon, { backgroundColor: "#dc2626" }]}> 
                    <Text style={styles.transactionIconText}>🇺🇸</Text>
                  </View>
                  <View>
                    <Text style={styles.transactionTitle}>AUD → TRUMP</Text>
                    <Text style={styles.transactionDate}>1 September, 09:31</Text>
                  </View>
                </View>
                <View style={styles.transactionRight}>
                  <Text style={styles.transactionAmount}>+0.0074 TRUMP</Text>
                  <Text style={styles.transactionValue}>-$3.80</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            {/* Portfolio Charts */}
            <View style={styles.chartsGrid}>
              <View style={styles.chartCard}>
                <Text style={styles.chartLabel}>BTC</Text>
                <Text style={styles.chartValue}>$169,266</Text>
                <Text style={styles.chartChangeNegative}>-1.04%</Text>
                <View style={styles.miniChart}>
                  <Svg width="100%" height={30} viewBox="0 0 100 30">
                    <Path d="M 0 15 Q 25 10 50 12 T 100 20" stroke="#ef4444" strokeWidth="1" fill="none" />
                  </Svg>
                </View>
              </View>
              <View style={styles.chartCard}>
                <Text style={styles.chartLabel}>ETH</Text>
                <Text style={styles.chartValue}>$6,688.14</Text>
                <Text style={styles.chartChangeNegative}>-2.36%</Text>
                <View style={styles.miniChart}>
                  <Svg width="100%" height={30} viewBox="0 0 100 30">
                    <Path d="M 0 10 Q 25 15 50 18 T 100 25" stroke="#ef4444" strokeWidth="1" fill="none" />
                  </Svg>
                </View>
              </View>
            </View>

            {/* Top Movers */}
            <View style={styles.topMoversSection}>
              <Text style={styles.sectionTitle}>Top movers 🔥</Text>

              <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.activeTab}>
                  <Text style={styles.activeTabText}>Top gainers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inactiveTab}>
                  <Text style={styles.inactiveTabText}>Top losers</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.moversGrid}>
                {[
                  { name: "FET", icon: "F", color: "#ec4899", change: "+8.52%" },
                  { name: "NEAR", icon: "N", color: "#2563eb", change: "+6.43%" },
                  { name: "AAVE", icon: "A", color: "#9333ea", change: "+5.21%" },
                  { name: "LTC", icon: "L", color: "#6b7280", change: "+4.21%" },
                  { name: "MKR", icon: "M", color: "#14b8a6", change: "+4.18%" },
                  { name: "CURU", icon: "C", color: "#22c55e", change: "+4.18%" },
                  { name: "MATH", icon: "M", color: "#000000", change: "+3.21%" },
                  { name: "OKA", icon: "O", color: "#60a5fa", change: "+2.76%" },
                ].map((item, index) => (
                  <View key={index} style={styles.moverCard}>
                    <View style={[styles.moverIcon, { backgroundColor: item.color }]}>
                      <Text style={styles.moverIconText}>{item.icon}</Text>
                    </View>
                    <Text style={styles.moverName}>{item.name}</Text>
                    <Text style={styles.moverChange}>{item.change}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Features */}
            <View style={styles.featuresSection}>
              <Text style={styles.sectionTitle}>Features</Text>
              <View style={styles.featureItem}>
                <View style={styles.featureLeft}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>📈</Text>
                  </View>
                  <View>
                    <Text style={styles.featureTitle}>Strategies</Text>
                    <Text style={styles.featureSubtitle}>Leverage top trading</Text>
                  </View>
                </View>
                <Text style={styles.featureArrow}>↗️</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureLeft}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>💡</Text>
                  </View>
                  <View>
                    <Text style={styles.featureTitle}>Learn</Text>
                    <Text style={styles.featureSubtitle}>Get up to speed in crypto</Text>
                  </View>
                </View>
                <Text style={styles.featureArrow}>↗️</Text>
              </View>
            </View>

            {/* All Crypto */}
            <View style={styles.allCryptoSection}>
              <Text style={styles.sectionTitle}>All crypto 🔥</Text>
              {[
                { name: "Bitcoin", symbol: "BTC", icon: "₿", color: "#f97316", price: "$109,252", change: "-1.04%", negative: true },
                { name: "Ether", symbol: "ETH", icon: "Ξ", color: "#3b82f6", price: "$6,687.85", change: "-2.36%", negative: true },
                { name: "XRP", symbol: "XRP", icon: "X", color: "#2563eb", price: "$4.32", change: "+1.23%", negative: false },
                { name: "BNB", symbol: "BNB", icon: "B", color: "#eab308", price: "$1,208.37", change: "-1.84%", negative: true },
                { name: "Solana", symbol: "SOL", icon: "S", color: "#9333ea", price: "$316.84", change: "+4.01%", negative: false },
              ].map((crypto, index) => (
                <View key={index} style={styles.cryptoListItem}>
                  <View style={styles.cryptoListLeft}>
                    <View style={[styles.cryptoListIcon, { backgroundColor: crypto.color }]}> 
                      <Text style={styles.cryptoListIconText}>{crypto.icon}</Text>
                    </View>
                    <View>
                      <Text style={styles.cryptoListName}>{crypto.name}</Text>
                      <Text style={styles.cryptoListSymbol}>{crypto.symbol}</Text>
                    </View>
                  </View>
                  <View style={styles.cryptoListRight}>
                    <Text style={styles.cryptoListPrice}>{crypto.price}</Text>
                    <Text style={crypto.negative ? styles.cryptoChangeNegative : styles.cryptoChangePositive}>{crypto.change}</Text>
                  </View>
                </View>
              ))}

              <TouchableOpacity style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            {/* Add Widgets */}
            <TouchableOpacity style={styles.addWidgetsButton}>
              <Text style={styles.addWidgetsText}>+ Add widgets</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footerText}>Service provided by Revolut Ltd. View Crypto Disclosures.</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  statusBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 },
  statusText: { color: "white", fontSize: 14 },
  statusIcons: { flexDirection: "row", alignItems: "center", gap: 4 },
  signalBars: { flexDirection: "row", gap: 2 },
  signalBar: { width: 4, height: 12, borderRadius: 2 },
  signalBarActive: { backgroundColor: "white" },
  signalBarInactive: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  profileIcon: { width: 32, height: 32, backgroundColor: "#f97316", borderRadius: 16, alignItems: "center", justifyContent: "center" },
  profileText: { color: "white", fontSize: 14, fontWeight: "bold" },
  searchContainer: { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: 20, marginHorizontal: 16, paddingHorizontal: 12, paddingVertical: 8 },
  searchIcon: { marginRight: 8, fontSize: 16 },
  searchInput: { flex: 1, color: "white", fontSize: 16 },
  headerIcons: { flexDirection: "row", gap: 8 },
  headerButton: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
  headerButtonText: { color: "white", fontSize: 16 },
  balanceSection: { alignItems: "center", paddingVertical: 24 },
  balanceAmount: { color: "white", fontSize: 36, fontWeight: "bold", marginBottom: 4 },
  balanceChange: { color: "#d1d5db", fontSize: 14 },
  chartContainer: { paddingHorizontal: 16, marginBottom: 24 },
  actionButtons: { flexDirection: "row", justifyContent: "center", gap: 32, marginBottom: 24 },
  actionButton: { alignItems: "center" },
  actionButtonCircle: { width: 48, height: 48, backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: 24, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  actionButtonIcon: { fontSize: 20 },
  actionButtonText: { color: "white", fontSize: 12 },
  portfolioSection: { backgroundColor: "rgba(0, 0, 0, 0.3)", borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 },
  portfolioItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  portfolioLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  cryptoIcon: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  cryptoIconText: { color: "white", fontSize: 16, fontWeight: "bold" },
  cryptoIconTextSmall: { color: "white", fontSize: 12 },
  cryptoName: { color: "white", fontSize: 16, fontWeight: "500" },
  cryptoDetails: { color: "#9ca3af", fontSize: 14 },
  portfolioRight: { alignItems: "flex-end" },
  cryptoValue: { color: "white", fontSize: 16, fontWeight: "500" },
  cryptoChangePositive: { color: "#22c55e", fontSize: 14 },
  cryptoChangeNegative: { color: "#ef4444", fontSize: 14 },
  transactionsSection: { paddingTop: 16 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  sectionTitle: { color: "#9ca3af", fontSize: 16 },
  sectionArrow: { color: "#9ca3af", fontSize: 16 },
  transactionItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  transactionLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  transactionIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  transactionIconText: { fontSize: 12 },
  transactionTitle: { color: "white", fontSize: 14, fontWeight: "500" },
  transactionDate: { color: "#9ca3af", fontSize: 12 },
  transactionRight: { alignItems: "flex-end" },
  transactionAmount: { color: "white", fontSize: 14 },
  transactionValue: { color: "#9ca3af", fontSize: 12 },
  seeAllButton: { alignItems: "center", paddingVertical: 16 },
  seeAllText: { color: "#60a5fa", fontSize: 16 },
  chartsGrid: { flexDirection: "row", gap: 16, paddingTop: 16 },
  chartCard: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: 8, padding: 16 },
  chartLabel: { color: "#9ca3af", fontSize: 12, marginBottom: 4 },
  chartValue: { color: "white", fontSize: 18, fontWeight: "bold" },
  chartChangeNegative: { color: "#ef4444", fontSize: 12, marginBottom: 8 },
  miniChart: { height: 30 },
  topMoversSection: { paddingTop: 24 },
  tabsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  activeTab: { backgroundColor: "#374151", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  activeTabText: { color: "#9ca3af", fontSize: 12 },
  inactiveTab: { paddingHorizontal: 12, paddingVertical: 4 },
  inactiveTabText: { color: "#9ca3af", fontSize: 12 },
  moversGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  moverCard: { width: (width - 80) / 4, backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: 8, padding: 12, alignItems: "center" },
  moverIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  moverIconText: { color: "white", fontSize: 12, fontWeight: "bold" },
  moverName: { color: "white", fontSize: 12, fontWeight: "500" },
  moverChange: { color: "#22c55e", fontSize: 12 },
  featuresSection: { paddingTop: 24 },
  featureItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  featureLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  featureIcon: { width: 32, height: 32, backgroundColor: "#374151", borderRadius: 8, alignItems: "center", justifyContent: "center" },
  featureIconText: { fontSize: 16 },
  featureTitle: { color: "white", fontSize: 14, fontWeight: "500" },
  featureSubtitle: { color: "#9ca3af", fontSize: 12 },
  featureArrow: { color: "#9ca3af", fontSize: 16 },
  allCryptoSection: { paddingTop: 24 },
  cryptoListItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  cryptoListLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  cryptoListIcon: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  cryptoListIconText: { color: "white", fontSize: 16, fontWeight: "bold" },
  cryptoListName: { color: "white", fontSize: 16, fontWeight: "500" },
  cryptoListSymbol: { color: "#9ca3af", fontSize: 14 },
  cryptoListRight: { alignItems: "flex-end" },
  cryptoListPrice: { color: "white", fontSize: 16, fontWeight: "500" },
  addWidgetsButton: { backgroundColor: "#2563eb", borderRadius: 24, paddingVertical: 12, alignItems: "center", marginTop: 24 },
  addWidgetsText: { color: "white", fontSize: 16, fontWeight: "500" },
  footerText: { color: "#6b7280", fontSize: 12, textAlign: "center", marginTop: 24 },
});