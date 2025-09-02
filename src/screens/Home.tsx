// Home screen (clean)
import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Search, BarChart3, Menu, Plus, ArrowUpDown, MoreHorizontal, ChevronRight } from "lucide-react-native";
import { Svg, Defs, LinearGradient as SvgLinearGradient, Stop, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import Button from "../components/ui/Button";
import RevolutCardsWidget, { CardData } from "../components/RevolutCardsWidget";

// Types
type User = { id: string; firstName: string; lastName: string };
type Transaction = { id: string; merchant?: string; createdAt?: string | number | Date; status?: string; amount?: number };
const { width } = Dimensions.get("window");

// Helpers
function formatAUD(n: number) {
  try {
    return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 2, maximumFractionDigits: 2 })
      .format(n)
      .replace("A$", "$");
  } catch {
    const sign = n < 0 ? "-" : "";
    return `${sign}$${Math.abs(n).toFixed(2)}`;
  }
}
function formatDate(d?: string | number | Date) {
  if (!d) return "";
  const date = new Date(d);
  try {
    return date.toLocaleString("en-AU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  } catch {
    return date.toDateString();
  }
}

export default function Home() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user: User = { id: "1", firstName: "Thomas", lastName: "Francis" }; // currently unused
  const transactions: Transaction[] = [
    { id: "t1", merchant: "GitHub", createdAt: new Date().toISOString(), status: "Reverted", amount: 1.55 },
    { id: "t2", merchant: "Thomas Francis", createdAt: new Date(Date.now() - 2 * 86400000).toISOString(), status: "Sent from Revolut", amount: -18 },
  ];
  const recentTransactions = useMemo(() => transactions.slice(0, 2), [transactions]);
  const balance = 2.19;
  const [whole, cents] = balance.toFixed(2).split(".");
  const cards: CardData[] = [
    { id: "original", label: "Original", secondary: "··4103", gradientKey: "original", showAlertDot: true, showMastercard: true, ring: true },
    { id: "disposable", label: "Disposable", secondary: "Generate", gradientKey: "disposable", showMastercard: true },
    { id: "get-card", label: "Get card", gradientKey: "teal" },
  ];

  return (
    <View style={styles.safe}>
      <View style={styles.root}>
        {/* Header / Balance area */}
        <View style={{ height: 580 + insets.top, marginTop: -insets.top }}>
          <LinearGradient
            colors={["#1e40af", "#0a2269", "#03103f", "#01041c", "rgba(0,0,0,0.85)", "transparent"]}
            locations={[0, 0.4, 0.64, 0.84, 0.96, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={[styles.topBarWrap, { paddingTop: insets.top }]}>
            <View style={styles.topBar}>
              <View style={styles.avatar}>
                <Svg width={20} height={20} viewBox="0 0 24 24">
                  <Path d="M3 7h2l2-3h6l2 3h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm9 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#fff" />
                </Svg>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.searchPill}>
                <Search size={18} color="rgba(255,255,255,0.85)" />
                <Text style={styles.searchText}>Search</Text>
              </TouchableOpacity>
              <View style={styles.rightIcons}>
                <View style={styles.circleBtn}><BarChart3 size={18} color="#fff" /></View>
                <View style={styles.circleBtn}><Menu size={18} color="#fff" /></View>
              </View>
            </View>
          </View>
          <View style={styles.centerStack}>
            <Text style={styles.accountType}>Personal · AUD</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceWhole}>{whole}</Text>
              <Text style={styles.balanceCents}>.{cents}</Text>
            </View>
            <Button label="Accounts" style={styles.accountsBtn} />
          </View>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 96 }} showsVerticalScrollIndicator={false}>
          {/* Quick actions */}
          <View style={styles.quickRow}>
            {[
              { key: "add", label: "Add money", icon: <Plus size={20} color="#fff" /> },
              { key: "payid", label: "PayID", icon: <Text style={styles.payId}>iD</Text> },
              { key: "move", label: "Move", icon: <ArrowUpDown size={20} color="#fff" /> },
              { key: "more", label: "More", icon: <MoreHorizontal size={20} color="#fff" /> },
            ].map(a => (
              <View key={a.key} style={styles.quickItem}>
                <View style={styles.quickCircle}>{a.icon}</View>
                <Text style={styles.quickLabel}>{a.label}</Text>
              </View>
            ))}
          </View>

          {/* Transactions */}
          <View style={styles.card}>
            {recentTransactions.length ? (
              recentTransactions.map((t, idx) => {
                const name = t.merchant ?? "Payment";
                const sub = [formatDate(t.createdAt), t.status].filter(Boolean).join(" · ");
                const amountNum = Number(t.amount ?? 0);
                const negative = amountNum < 0;
                return (
                  <View key={t.id} style={[styles.txRow, idx > 0 && { marginTop: 24 }]}>
                    <View style={styles.txAvatar}>
                      <View style={styles.txDot} />
                      <View style={styles.txArrowWrap}>
                        <Svg width={12} height={12} viewBox="0 0 24 24">
                          <Path d="M7 12h10M12 7l5 5-5 5" fill="#fff" />
                        </Svg>
                      </View>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text style={styles.txName}>{name}</Text>
                      <Text style={styles.txSub}>{sub}</Text>
                    </View>
                    <Text style={[styles.txAmt, { color: negative ? "#ff6b6b" : "rgba(255,255,255,0.95)" }]}>
                      {negative ? `-${formatAUD(Math.abs(amountNum))}` : formatAUD(amountNum)}
                    </Text>
                  </View>
                );
              })
            ) : (
              <>
                <View style={styles.skel} />
                <View style={[styles.skel, { marginTop: 12 }]} />
              </>
            )}
            <Button
              label="See all"
              style={{ marginTop: 16, backgroundColor: "transparent", borderWidth: 1, borderColor: "rgba(255,255,255,0.12)" }}
              textStyle={{ color: "rgba(255,255,255,0.92)" }}
              onPress={() => navigation.navigate("Transactions")}
            />
          </View>

          {/* Cards */}
          <View style={{ marginTop: 16 }}>
            <RevolutCardsWidget cards={cards} />
          </View>

          {/* Wealth */}
          <View style={styles.rowHeader}>
            <Text style={styles.rowHeaderText}>Total wealth</Text>
            <ChevronRight size={16} color="rgba(255,255,255,0.55)" />
          </View>
          <View style={styles.card}>
            <Text style={styles.bigNumber}>{formatAUD(4.29)}</Text>
            <View style={{ marginTop: 16, gap: 16 }}>
              <Row iconBg="#6C8CFF" left="Cash" right={formatAUD(2.19)} />
              <Row iconBg="#A070FF" left="Crypto" right={formatAUD(2.10)} iconText="₿" />
              <RowChevron iconBg="#D8E958" title="Loan" subtitle="Get a low-rate loan up to $50,000" />
              <RowChevron iconBg="#56B4FF" title="Invest" subtitle="Invest for as little as $1" icon={<BarChart3 size={16} color="#fff" />} />
            </View>
          </View>

          {/* Spending */}
          <View style={[styles.card, { marginTop: 16 }]}>
            <Text style={styles.sectionTitle}>Spent this month</Text>
            <View style={styles.spentRow}>
              <Text style={styles.spentMain}>$24</Text>
              <Text style={styles.spentDelta}>▼ $1,051</Text>
              <Text style={styles.spentRight}>$144</Text>
            </View>
            <View style={{ marginTop: 12, height: 88 }}>
              <Svg width="100%" height="100%" viewBox="0 0 300 80">
                <Defs>
                  <SvgLinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                    <Stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </SvgLinearGradient>
                </Defs>
                <Path d="M0,70 L100,70 L150,70 L160,65 L220,65 L240,55 L260,45 L300,35" stroke="#22c55e" strokeWidth={2} fill="none" />
                <Path d="M0,70 L100,70 L150,70 L160,65 L220,65 L240,55 L260,45 L300,35 L300,80 L0,80 Z" fill="url(#grad)" />
              </Svg>
              <View style={styles.axisLabels}>
                {["1", "6", "11", "16", "21", "26", "31"].map(d => (
                  <Text key={d} style={styles.axisText}>{d}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* Watchlist */}
          <View style={styles.rowHeader}>
            <Text style={styles.rowHeaderText}>Watchlist</Text>
            <ChevronRight size={16} color="rgba(255,255,255,0.55)" />
          </View>
          <View style={styles.card}>
            <WatchRow dot="bg" label="Gold" sub="XAU to AUD" price="$5,135.7332" pct="▼ 0.07%" />
            <View style={{ height: 16 }} />
            <WatchRow dot="flag" label="Euro" sub="EUR to AUD" price="$1.7950" pct="▼ 0.18%" />
            <Button
              label="See all"
              style={{ marginTop: 8, backgroundColor: "transparent", borderWidth: 1, borderColor: "rgba(255,255,255,0.12)" }}
              textStyle={{ color: "rgba(255,255,255,0.92)" }}
            />
          </View>
        </ScrollView>
      </View>
  </View>
  );
}

// Small row components
function Row({ iconBg, left, right, iconText }: { iconBg: string; left: string; right: string; iconText?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <View style={[styles.rowIcon, { backgroundColor: iconBg }]}>
          <Text style={styles.rowIconText}>{iconText ?? "$"}</Text>
        </View>
        <Text style={styles.rowLeftText}>{left}</Text>
      </View>
      <Text style={styles.rowRightText}>{right}</Text>
    </View>
  );
}
function RowChevron({ iconBg, title, subtitle, icon }: { iconBg: string; title: string; subtitle: string; icon?: React.ReactNode }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <View style={[styles.rowIcon, { backgroundColor: iconBg }]}>
          {icon ?? <Text style={styles.rowIconText}>$</Text>}
        </View>
        <View>
          <Text style={styles.rowLeftText}>{title}</Text>
          <Text style={styles.rowSub}>{subtitle}</Text>
        </View>
      </View>
      <ChevronRight size={16} color="rgba(255,255,255,0.65)" />
    </View>
  );
}
function WatchRow({ dot, label, sub, price, pct }: { dot: "bg" | "flag"; label: string; sub: string; price: string; pct: string }) {
  return (
    <View style={styles.watchRow}>
      <View style={styles.rowLeft}>
        <View style={[styles.watchDot, { backgroundColor: dot === "bg" ? "#EADFC7" : "transparent" }]}>
          {dot === "flag" ? <Text style={{ fontSize: 12 }}>🇪🇺</Text> : <Text style={styles.dotText}>Au</Text>}
        </View>
        <View>
          <Text style={styles.rowLeftText}>{label}</Text>
          <Text style={styles.rowSub}>{sub}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.rowRightText}>{price}</Text>
        <Text style={{ color: "#ef4444", fontSize: 13 }}>{pct}</Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0B0D18" },
  root: { flex: 1, backgroundColor: "#0B0D18" },
  topBarWrap: { paddingTop: 8, paddingHorizontal: 8 },
  topBar: { flexDirection: "row", alignItems: "center", gap: 8 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F59E0B", alignItems: "center", justifyContent: "center" },
  searchPill: { flex: 1, height: 40, borderRadius: 22, backgroundColor: "rgba(255,255,255,0.18)", borderWidth: 1, borderColor: "rgba(255,255,255,0.15)", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, gap: 8 },
  searchText: { color: "rgba(255,255,255,0.75)", fontSize: 13 },
  rightIcons: { flexDirection: "row", alignItems: "center", gap: 8 },
  circleBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.12)", borderWidth: 1, borderColor: "rgba(255,255,255,0.10)", alignItems: "center", justifyContent: "center" },
  centerStack: { alignItems: "center", paddingTop: 48 },
  accountType: { color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 32, marginBottom: 6 },
  balanceRow: { flexDirection: "row", alignItems: "flex-start" },
  balanceWhole: { color: "#fff", fontSize: 40, lineHeight: 40, marginTop: 10, marginRight: 2 },
  balanceCents: { color: "#fff", fontSize: 22, lineHeight: 22, marginTop: 10 },
  accountsBtn: { marginTop: 19, height: 38, width: 85, borderRadius: 999, backgroundColor: "rgba(88,100,165,0.6)", borderWidth: 1, borderColor: "rgba(255,255,255,0.15)" },
  content: { paddingHorizontal: 8, marginTop: -187 },
  quickRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  quickItem: { width: (width - 8 * 2 - 8 * 3) / 4, alignItems: "center" },
  quickCircle: { width: 52, height: 52, borderRadius: 26, backgroundColor: "rgba(255,255,255,0.15)", alignItems: "center", justifyContent: "center" },
  quickLabel: { marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.8)" },
  payId: { fontSize: 12, fontWeight: "900", color: "#fff" },
  card: { marginTop: 36, borderRadius: 22, backgroundColor: "rgba(15,18,36,0.95)", padding: 16 },
  txRow: { flexDirection: "row", alignItems: "center" },
  txAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#000", alignItems: "center", justifyContent: "center" },
  txDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#fff" },
  txArrowWrap: { position: "absolute", right: -4, bottom: -4, width: 16, height: 16, borderRadius: 8, backgroundColor: "#10182A", alignItems: "center", justifyContent: "center" },
  txName: { color: "#fff", fontSize: 16, fontWeight: "600", lineHeight: 18 },
  txSub: { color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 2 },
  txAmt: { minWidth: 76, textAlign: "right", paddingRight: 8, fontSize: 15 },
  rowHeader: { marginTop: 16, paddingHorizontal: 4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  rowHeaderText: { color: "rgba(255,255,255,0.8)", fontSize: 15 },
  bigNumber: { color: "#fff", fontSize: 34, fontWeight: "700" },
  sectionTitle: { color: "#fff", fontWeight: "600", marginBottom: 4 },
  spentRow: { flexDirection: "row", alignItems: "flex-end", gap: 8 },
  spentMain: { color: "#fff", fontSize: 26, fontWeight: "700" },
  spentDelta: { color: "#34d399", fontSize: 14 },
  spentRight: { marginLeft: "auto", color: "rgba(255,255,255,0.7)", fontSize: 14 },
  axisLabels: { position: "absolute", left: 4, right: 4, bottom: 0, flexDirection: "row", justifyContent: "space-between" },
  axisText: { color: "rgba(255,255,255,0.5)", fontSize: 11 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  rowIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  rowIconText: { color: "#fff", fontSize: 14, fontWeight: "700" },
  rowLeftText: { color: "#fff", fontSize: 16 },
  rowRightText: { color: "#fff", fontSize: 16 },
  rowSub: { color: "rgba(255,255,255,0.6)", fontSize: 13 },
  watchRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  watchDot: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  dotText: { color: "#000", fontWeight: "700", fontSize: 12 },
  skel: { height: 48, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.08)" },
});
