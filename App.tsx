import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
} from "native-base";
import Sidebar from "./components/Sidebar";
import { StyleSheet } from "react-native";
import ChannelList from "./components/ChannelList";
import { flex } from "styled-system";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.appContainer}>
        <Box style={styles.sidebarContainer}>
          <Sidebar />
        </Box>
        <Box style={styles.channelListWrapper}>
          <ChannelList />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
  },
  sidebarContainer: {},
  channelListWrapper: {
    paddingTop: 48,
    height: "100%",
  },
});
