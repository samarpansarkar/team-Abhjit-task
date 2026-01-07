import { ThemeProvider } from "@/context/themeContext";
import DrawerNavigator from "@/drawer/DrawerNavigation";

export default function RootLayout() {
  return (
    <ThemeProvider>
      {/* <NavigationContainer>*/}
      {/* //!never add this in expo app we don't need this. */}
      <DrawerNavigator />
      {/* </NavigationContainer> */}
    </ThemeProvider>
  );
}
