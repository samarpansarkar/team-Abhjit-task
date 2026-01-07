import { useThemeToggle } from "@/context/themeContext";
import React, { useState } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

const MainContain = () => {
  const { theme } = useThemeToggle();
  const [counter, setCounter] = useState(0);

  const isDisabled = counter === 0;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "dark" ? "#044811ff" : "#2ffa79ff",
      }}
    >
      <Text
        style={{ color: theme === "dark" ? "white" : "black", fontSize: 20 }}
      >
        MainContain
      </Text>

      <Text
        style={{ color: theme === "dark" ? "white" : "black", fontSize: 16 }}
      >
        Counter: {counter}
      </Text>

      <View style={{ flexDirection: "row", gap: 12, marginTop: 20 }}>
        {/* Increase */}
        <Pressable
          style={buttonStyle(false)}
          onPress={() => setCounter((prev) => prev + 1)}
        >
          <Text style={textStyle(theme)}>Increase</Text>
        </Pressable>

        {/* Decrease */}
        <Pressable
          disabled={isDisabled}
          style={buttonStyle(isDisabled)}
          onPress={() => setCounter((prev) => Math.max(prev - 1, 0))}
        >
          <Text style={textStyle(theme)}>Decrease</Text>
        </Pressable>

        {/* Reset */}
        <Pressable
          disabled={isDisabled}
          style={buttonStyle(isDisabled)}
          onPress={() => setCounter(0)}
        >
          <Text style={textStyle(theme)}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

const buttonStyle = (disabled: boolean): ViewStyle => ({
  padding: 10,
  borderRadius: 10,
  width: 100,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#00000055",
  opacity: disabled ? 0.4 : 1,
});

const textStyle = (theme: string) => ({
  color: theme === "dark" ? "white" : "black",
  fontSize: 14,
});

export default MainContain;
