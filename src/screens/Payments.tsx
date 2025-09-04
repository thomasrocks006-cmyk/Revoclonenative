import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { Search, BarChart2, Globe } from "lucide-react-native";

// Duplicate styles block removed

export default function PaymentApp() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Unified header (TF avatar, search bar, BarChart2, Globe) */}
      <View style={styles.headerRow}>
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

      {/* Transaction Cards */}
      <View style={styles.cardsContainer}>
        {/* Thomas Francis Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.cardLeft}>
              <View style={styles.cardAvatarContainer}>
                <View style={[styles.cardAvatar, styles.orangeAvatar]}>
                  <Text style={styles.cardAvatarText}>TF</Text>
                  <View style={styles.bankIcon}>
                    <View style={styles.bankIconInner} />
                  </View>
                </View>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>Thomas Francis</Text>
                <Text style={styles.cardAmount}>You sent $11</Text>
              </View>
            </View>
            <Text style={styles.cardDate}>Mon</Text>
          </View>
        </View>

        {/* Charlie Faulkner Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.cardLeft}>
              <View style={styles.cardAvatarContainer}>
                <View style={[styles.cardAvatar, styles.purpleAvatar]}>
                  <Text style={styles.cardAvatarText}>CF</Text>
                  <View style={styles.bankIcon}>
                    <View style={styles.bankIconInner} />
                  </View>
                </View>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>Charlie Faulkner</Text>
                <Text style={styles.cardAmount}>You sent $300</Text>
              </View>
            </View>
            <Text style={styles.cardDate}>20 Jul</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
// ...existing code...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  profileIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#f97316",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  headerButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: "#F97316",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  avatarText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  notificationDot: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    backgroundColor: "#EF4444",
    borderRadius: 6,
  },
  // Removed all duplicate searchContainer, searchIcon, searchInput style keys
  iconButton: {
    width: 48,
    height: 48,
    backgroundColor: "#374151",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  card: {
    backgroundColor: "rgba(31, 41, 55, 0.5)",
    borderRadius: 16,
    padding: 16,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardAvatarContainer: {
    position: "relative",
  },
  cardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  orangeAvatar: {
    backgroundColor: "#F97316",
  },
  purpleAvatar: {
    backgroundColor: "#A855F7",
  },
  cardAvatarText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  bankIcon: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    backgroundColor: "#374151",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  bankIconInner: {
    width: 12,
    height: 12,
    backgroundColor: "#9CA3AF",
    borderRadius: 2,
  },
  cardInfo: {
    gap: 2,
  },
  cardName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  cardAmount: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  cardDate: {
    color: "#9CA3AF",
    fontSize: 14,
  },
})
