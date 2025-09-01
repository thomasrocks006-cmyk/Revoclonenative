import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transactions() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Text style={styles.text}>Transactions (placeholder)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0B0D18" },
  root: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: "#fff", fontSize: 18 },
});
