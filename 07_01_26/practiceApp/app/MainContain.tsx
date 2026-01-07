import { useThemeToggle } from "@/context/themeContext";
import React from "react";
import { Pressable, Text, View } from "react-native";

const MainContain = () => {
  const { theme } = useThemeToggle();
  const [counter, setCounter] = React.useState(0);
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
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#00000055",
            borderRadius: 10,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setCounter(counter + 1);
          }}
        >
          <Text
            style={{
              color: theme === "dark" ? "white" : "black",
              fontSize: 14,
            }}
          >
            Increase: {counter + 1}
          </Text>
        </Pressable>
        <Pressable
          disabled={counter === 0}
          style={{
            padding: 8,
            backgroundColor: "#00000055",
            borderRadius: 10,
            width: 100,
            alignItems: "center",
          }}
          onPress={() => {
            setCounter(counter - 1);
          }}
        >
          <Text
            style={{
              color: theme === "dark" ? "white" : "black",
              fontSize: 14,
            }}
          >
            Decrease: {counter - 1}
          </Text>
        </Pressable>
        <Pressable
          disabled={counter === 0}
          style={{
            padding: 8,
            backgroundColor: "#00000055",
            borderRadius: 10,
            width: 100,
            alignItems: "center",
          }}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text
            style={{
              color: theme === "dark" ? "white" : "black",
              fontSize: 14,
            }}
          >
            Reset: {0}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainContain;
