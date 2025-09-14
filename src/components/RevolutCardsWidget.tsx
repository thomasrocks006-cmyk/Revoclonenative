import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type CardData = {
  id: string;
  label: string;
  secondary?: string;
  gradientKey: "original" | "disposable" | "teal";
  showMastercard?: boolean;
  showAlertDot?: boolean;
  ring?: boolean;
};

const { width } = Dimensions.get("window");
const PADDING = 8;
const GAP = 12;
const CARD_W = (width - PADDING * 2 - GAP * 2) / 3;
const CARD_H = CARD_W * 0.8;

export default function RevolutCardsWidget({ cards }: { cards: CardData[] }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: PADDING, gap: GAP }}
      snapToAlignment="start"
      snapToInterval={CARD_W + GAP}
      decelerationRate="fast"
    >
      {cards.map((c) => {
  let colors: [string, string];
  if (c.gradientKey === "original") colors = ["#5b6cff", "#3a3ea1"];
  else if (c.gradientKey === "disposable") colors = ["#646b7a", "#3a3f4a"];
  else colors = ["#12c2b7", "#0b8d84"];

        return (
          <LinearGradient
            key={c.id}
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
              styles.card,
              c.ring && { borderWidth: 1, borderColor: "rgba(255,255,255,0.35)" },
            ]}
          >
            <View style={styles.row}>
              <Text style={styles.label}>{c.label}</Text>
              {c.showAlertDot && <View style={styles.dot} />}
            </View>
            {!!c.secondary && <Text style={styles.secondary}>{c.secondary}</Text>}

            {c.showMastercard && (
              <View style={styles.mcRow}>
                <View style={[styles.mcCircle, { backgroundColor: "#ff5f58" }]} />
                <View style={[styles.mcCircle, { backgroundColor: "#fbbf24", marginLeft: -10 }]} />
              </View>
            )}
          </LinearGradient>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: 18,
    padding: 16,
    justifyContent: "space-between",
  },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  label: { color: "#fff", fontSize: 18, fontWeight: "700" },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#22c55e" },
  secondary: { color: "rgba(255,255,255,0.9)", fontSize: 16 },
  mcRow: { flexDirection: "row", alignItems: "center" },
  mcCircle: { width: 28, height: 28, borderRadius: 14 },
});
