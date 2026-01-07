import { ThemeProvider } from "@/context/themeContext";
import { View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import MainContain from "./MainContain";

export default function Index() {
  // const pressHandle = () => {
  //   // console.log("btn pressed!!!");
  //   // Alert.alert("btn pressed!!!");
  //   Alert.alert("", "Are you sure?", [
  //     {
  //       text: "Yes",
  //       onPress: () => {
  //         console.log("you press Yes!!");
  //         // setDark(!dark);
  //       },
  //     },
  //     {
  //       text: "No",
  //       style: "cancel",
  //       onPress: () => {
  //         console.log("You press No!!!!");
  //       },
  //     },
  //   ]);
  // };

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <Header />
        <MainContain />
        <Footer />
      </View>
    </ThemeProvider>
  );
}
