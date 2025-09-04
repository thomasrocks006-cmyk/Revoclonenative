import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, TrendingUp, Plus, ArrowDown, MoreHorizontal, ChevronUp, ChevronRight, BarChart2, Globe } from "lucide-react-native";

export default function Invest() {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#0f766e" />
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        {/* Header */}
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

        {/* Portfolio Value */}
        <View style={styles.portfolioSection}>
          <Text style={styles.portfolioLabel}>Capital at risk</Text>
          <View style={styles.portfolioValue}>
            <Text style={styles.portfolioAmount}>$6</Text>
            <Text style={styles.portfolioCents}>.74</Text>
          </View>
          <View style={styles.portfolioChange}>
            <Text style={styles.changeText}>+$0.02</Text>
            <Text style={styles.changeText}>▲ 0.23%</Text>
          </View>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <Svg width="100%" height={80} viewBox="0 0 300 80">
            <Path d="M 0 60 Q 75 50 150 45 T 300 20" stroke="white" strokeWidth="2" fill="none" />
          </Svg>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, { width: (width - 8 * 2 - 8 * 3) / 4 }]}>
            <View style={styles.actionButtonIcon}>
              <TrendingUp size={20} color="white" />
            </View>
            <Text style={styles.actionButtonText}>Trade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { width: (width - 8 * 2 - 8 * 3) / 4 }]}>
            <View style={styles.actionButtonIcon}>
              <Plus size={20} color="white" />
            </View>
            <Text style={styles.actionButtonText}>Add money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { width: (width - 8 * 2 - 8 * 3) / 4 }]}>
            <View style={styles.actionButtonIcon}>
              <ArrowDown size={20} color="white" />
            </View>
            <Text style={styles.actionButtonText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { width: (width - 8 * 2 - 8 * 3) / 4 }]}>
            <View style={styles.actionButtonIcon}>
              <MoreHorizontal size={20} color="white" />
            </View>
            <Text style={styles.actionButtonText}>More</Text>
          </TouchableOpacity>
        </View>

        {/* Stocks Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitle}>
              <TrendingUp size={16} color="white" />
              <Text style={styles.cardTitleText}>Stocks</Text>
            </View>
            <ChevronUp size={16} color="white" />
          </View>
          <View style={styles.stockValue}>
            <Text style={styles.stockValueText}>$6.74 ▲ 0.23%</Text>
          </View>

          {/* Stock Items */}
          <View style={styles.stockItems}>
            <View style={styles.stockItem}>
              <View style={styles.stockItemLeft}>
                <View style={[styles.stockIcon, { backgroundColor: "#EC4899" }]}> 
                  <View style={styles.stockIconDot} />
                </View>
                <View>
                  <Text style={styles.stockName}>Taiwan Semiconductor</Text>
                  <Text style={styles.stockDetails}>0.01 TSM • US$228.10</Text>
                </View>
              </View>
              <View style={styles.stockItemRight}>
                <Text style={styles.stockPrice}>$2.62</Text>
                <Text style={styles.stockChangePositive}>▲ 0.76%</Text>
              </View>
            </View>

            <View style={styles.stockItem}>
              <View style={styles.stockItemLeft}>
                <View style={[styles.stockIcon, { backgroundColor: "#059669" }]}>
                  <Text style={styles.stockIconText}>N</Text>
                </View>
                <View>
                  <Text style={styles.stockName}>NVIDIA</Text>
                  <Text style={styles.stockDetails}>0.01 NVDA • US$169.56</Text>
                </View>
              </View>
              <View style={styles.stockItemRight}>
                <Text style={styles.stockPrice}>$2.60</Text>
                <Text style={styles.stockChangeNegative}>▼ 0.10%</Text>
              </View>
            </View>

            <View style={styles.stockItem}>
              <View style={styles.stockItemLeft}>
                <View style={[styles.stockIcon, { backgroundColor: "#2563EB" }]}>
                  <Text style={styles.stockIconText}>🇺🇸</Text>
                </View>
                <View>
                  <Text style={styles.stockName}>US Dollar</Text>
                  <Text style={styles.stockDetails}>USD</Text>
                </View>
              </View>
              <View style={styles.stockItemRight}>
                <Text style={styles.stockPrice}>US$1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Commodities Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitle}>
              <View style={styles.commodityIcon} />
              <Text style={styles.cardTitleText}>Commodities</Text>
            </View>
            <Text style={styles.commodityValue}>$0</Text>
          </View>
        </View>

        {/* Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Products</Text>
          <View style={styles.productsGrid}>
            <TouchableOpacity style={styles.productItem}>
              <View style={styles.productIcon}>
                <TrendingUp size={20} color="white" />
              </View>
              <Text style={styles.productText}>Stocks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productItem}>
              <View style={styles.productIcon}>
                <View style={styles.etfIcon} />
              </View>
              <Text style={styles.productText}>ETFs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productItem}>
              <View style={styles.productIcon}>
                <View style={styles.commodityProductIcon} />
              </View>
              <Text style={styles.productText}>Commodities</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Most Traded Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Most traded this week</Text>
            <ChevronRight size={16} color="#9CA3AF" />
          </View>
          <View style={styles.tradedItems}>
            <View style={styles.tradedItem}>
              <View style={styles.stockItemLeft}>
                <View style={[styles.stockIcon, { backgroundColor: "#059669" }]}>
                  <Text style={styles.stockIconText}>N</Text>
                </View>
                <View>
                  <Text style={styles.stockName}>NVDA</Text>
                  <Text style={styles.stockDetails}>79% Buys • 21% Sells</Text>
                </View>
              </View>
              <View style={styles.stockItemRight}>
                <Text style={styles.stockPrice}>US$169.56</Text>
                <Text style={styles.stockChangeNegative}>▼ 2.69%</Text>
              </View>
            </View>

            <View style={styles.tradedItem}>
              <View style={styles.stockItemLeft}>
                <View style={[styles.stockIcon, { backgroundColor: "#000" }]}>
                  <Text style={styles.stockIconText}>🍎</Text>
                </View>
                <View>
                  <Text style={styles.stockName}>AAPL</Text>
                  <Text style={styles.stockDetails}>72% Buys • 28% Sells</Text>
                </View>
              </View>
              <View style={styles.stockItemRight}>
                <Text style={styles.stockPrice}>US$236.78</Text>
                <Text style={styles.stockChangeNegative}>▼ 2.00%</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* News Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>News</Text>
            <ChevronRight size={16} color="#9CA3AF" />
          </View>
          <View style={styles.newsItems}>
            <View style={styles.newsItem}>
              <View style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>Australia GDP Data Due On Wednesday</Text>
                <Text style={styles.newsTime}>Today, 08:17 • dpa AFX Com</Text>
              </View>
            </View>
            <View style={styles.newsItem}>
              <View style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>Eurozone Inflation Path Suggests ECB Unlikely To Cut Rates Further</Text>
                <Text style={styles.newsTime}>Today, 02:45 • dpa AFX Com</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Corporate Events */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Corporate events</Text>
            <ChevronRight size={16} color="#9CA3AF" />
          </View>
          <View style={styles.eventsItems}>
            <View style={styles.eventItem}>
              <View style={[styles.stockIcon, { backgroundColor: "#059669" }]}>
                <Text style={styles.stockIconText}>N</Text>
              </View>
              <View>
                <Text style={styles.stockName}>NVIDIA</Text>
                <Text style={styles.stockDetails}>Ex-dividend • for October 11 September</Text>
              </View>
            </View>
            <View style={styles.eventItem}>
              <View style={[styles.stockIcon, { backgroundColor: "#EC4899" }]}>
                <View style={styles.stockIconDot} />
              </View>
              <View>
                <Text style={styles.stockName}>Taiwan Semiconductor</Text>
                <Text style={styles.stockDetails}>Ex-dividend • for October 16 September</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Add Widgets Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.addWidgetsButton}>
            <Plus size={16} color="white" />
            <Text style={styles.addWidgetsText}>Add widgets</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Text */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Commodities trading services are provided by Revolut Payments Australia Pty Ltd. View Commodities
            Disclosures.
          </Text>
          <Text style={styles.footerText}>Your capital is at risk. View Trading Disclosures.</Text>
        </View>

        {/* Bottom padding for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f766e",
  },
  scrollView: {
    flex: 1,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statusText: {
    color: "white",
    fontSize: 14,
  },
  statusRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  signalBars: {
    flexDirection: "row",
    gap: 2,
  },
  signalBar: {
    width: 4,
    height: 12,
    borderRadius: 2,
  },
  signalBarActive: {
    backgroundColor: "white",
  },
  signalBarInactive: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  profileIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#F97316",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  searchContainer: {
    flex: 1,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: 10,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingLeft: 40,
    paddingRight: 16,
    color: "white",
    fontSize: 16,
  },
  headerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  portfolioLabel: {
    color: "white",
    fontSize: 14,
    marginBottom: 8,
  },
  portfolioValue: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
  },
  portfolioAmount: {
    color: "white",
    fontSize: 48,
    fontWeight: "300",
  },
  portfolioCents: {
    color: "white",
    fontSize: 24,
    fontWeight: "300",
  },
  portfolioChange: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  changeText: {
    color: "white",
    fontSize: 14,
  },
  chartContainer: {
    height: 80,
    marginBottom: 32,
  },
  actionButtons: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 8,
  paddingHorizontal: 8,
  marginBottom: 32,
  },
  actionButton: {
  alignItems: "center",
  },
  actionButtonIcon: {
  width: 52,
  height: 52,
    backgroundColor: "rgba(15, 118, 110, 0.5)",
  borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionButtonText: {
    color: "#D1D5DB",
    fontSize: 12,
  },
  card: {
    backgroundColor: "rgba(15, 118, 110, 0.5)",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#0f766e",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardTitleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  stockValue: {
    alignItems: "flex-end",
    marginBottom: 16,
  },
  stockValueText: {
    color: "white",
    fontSize: 18,
  },
  stockItems: {
    gap: 12,
  },
  stockItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stockItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  stockIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  stockIconText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  stockIconDot: {
    width: 16,
    height: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
  stockName: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  stockDetails: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  stockItemRight: {
    alignItems: "flex-end",
  },
  stockPrice: {
    color: "white",
    fontSize: 16,
  },
  stockChangePositive: {
    color: "#10B981",
    fontSize: 12,
  },
  stockChangeNegative: {
    color: "#EF4444",
    fontSize: 12,
  },
  commodityIcon: {
    width: 16,
    height: 16,
    backgroundColor: "#EAB308",
    borderRadius: 2,
  },
  commodityValue: {
    color: "white",
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#D1D5DB",
    fontSize: 14,
  },
  productsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productItem: {
    alignItems: "center",
  },
  productIcon: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(15, 118, 110, 0.5)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  productText: {
    color: "#D1D5DB",
    fontSize: 12,
  },
  etfIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  commodityProductIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#EAB308",
    borderRadius: 2,
  },
  tradedItems: {
    gap: 12,
  },
  tradedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeAllButton: {
    alignItems: "center",
    marginTop: 16,
  },
  seeAllText: {
    color: "#5EEAD4",
    fontSize: 14,
  },
  newsItems: {
    gap: 12,
  },
  newsItem: {
    flexDirection: "row",
    gap: 12,
  },
  newsImage: {
    width: 64,
    height: 48,
    backgroundColor: "#6B7280",
    borderRadius: 8,
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  newsTime: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  eventsItems: {
    gap: 12,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  addWidgetsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15, 118, 110, 0.5)",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  addWidgetsText: {
    color: "white",
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  footerText: {
    color: "#9CA3AF",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 8,
  },
});
