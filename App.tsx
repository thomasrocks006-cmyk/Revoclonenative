import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./src/screens/Home";
import Transactions from "./src/screens/Transactions";
import { useColorScheme } from "react-native";
export type RootStackParamList = {
  Home: undefined;
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: "fade" }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Transactions" component={Transactions} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
