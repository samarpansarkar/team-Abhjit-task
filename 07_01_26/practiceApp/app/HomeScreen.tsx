import React from "react";
import { View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import MainContain from "./MainContain";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <MainContain />
      <Footer />
    </View>
  );
};

export default HomeScreen;
