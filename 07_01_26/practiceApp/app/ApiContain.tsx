import { useThemeToggle } from "@/context/themeContext";
import axios from "axios";
import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

type Info = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Error = {
  message: string;
};

const ApiContain = () => {
  const [info, setInfo] = useState<Info[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useThemeToggle();
  const fetchAPI = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = res.data;
      setInfo(data);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  };

  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "orange" : "white",
      }}
    >
      <Text
        style={{ fontSize: 50, color: theme === "dark" ? "white" : "black" }}
      >
        ApiContain
      </Text>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          gap: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={fetchAPI}
          style={{
            backgroundColor: theme === "dark" ? "white" : "black",
            padding: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: theme === "dark" ? "black" : "white" }}>
            Click to fetch data
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setInfo([])}
          style={{
            backgroundColor: theme === "dark" ? "white" : "black",
            padding: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: theme === "dark" ? "black" : "white" }}>
            Clear the data
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <Text
          style={{ fontSize: 30, color: theme === "dark" ? "white" : "black" }}
        >
          {loading && "Loading..........."}
        </Text>
        <Text>{error && error.message}</Text>
      </ScrollView>
      <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApiContain;
