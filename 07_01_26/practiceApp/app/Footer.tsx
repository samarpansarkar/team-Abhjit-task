import { useThemeToggle } from "@/context/themeContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  const { theme } = useThemeToggle();
  return (
    <View>
      <View
        style={{
          height: 60,
          backgroundColor: theme === "dark" ? "black" : "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ color: theme === "dark" ? "white" : "black", fontSize: 20 }}
        >
          All Copyight Reserved!! 2024
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
