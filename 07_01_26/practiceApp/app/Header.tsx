import { useThemeToggle } from "@/context/themeContext";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  const { theme, toggleTheme } = useThemeToggle();
  const themeHandle = () => {
    toggleTheme();
    console.log("theme changed!!!" + theme);
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: theme === "dark" ? "black" : "white",
          height: 60,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{ color: theme === "dark" ? "white" : "black", fontSize: 20 }}
        >
          Header
        </Text>
        <Pressable
          onPress={themeHandle}
          style={{
            padding: 10,
            backgroundColor: "#00000055",
            borderRadius: 20,
            borderWidth: 2,
            width: 60,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderColor: theme === "dark" ? "white" : "black",
          }}
        >
          <Text style={{ color: theme === "dark" ? "white" : "black" }}>
            {theme}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
