import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PortfolioProvider } from "./src/store/portfolio";
import Home from "./src/screens/Home";
import Invest from "./src/screens/Invest";
import Payments from "./src/screens/Payments";
import Crypto from "./src/screens/Crypto";
import Transactions from "./src/screens/Transactions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TrendingUp, Home as HomeIcon, ArrowRightLeft, Bitcoin } from "lucide-react-native";
import { useColorScheme } from "react-native";
export type RootStackParamList = {
  Tabs: undefined;
  Transactions: undefined;
};

type RootTabParamList = {
  Home: undefined;
  Invest: undefined;
  Payments: undefined;
  Crypto: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();
const queryClient = new QueryClient();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0B0D18", borderTopColor: "#141a2b" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarIcon: ({ color, size }) => <TrendingUp color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color, size }) => <ArrowRightLeft color={color} size={size} />,
          tabBarLabel: "Payments",
        }}
      />
      <Tab.Screen
        name="Crypto"
        component={Crypto}
        options={{
          tabBarIcon: ({ color, size }) => <Bitcoin color={color} size={size} />,
          tabBarLabel: "Crypto",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <PortfolioProvider>
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
          <StatusBar style="light" />
          <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false, animation: "fade" }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Transactions" component={Transactions} />
          </Stack.Navigator>
        </NavigationContainer>
      </PortfolioProvider>
    </QueryClientProvider>
  );
}
