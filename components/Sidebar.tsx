import React from "react";
import {
  Box,
  Avatar,
  VStack,
  List,
  Center,
  FlatList,
  HStack,
  MoonIcon,
} from "native-base";
import { StyleSheet } from "react-native";

export type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const images = [
    "https://media.discordapp.net/attachments/828346862993014834/895446354283884584/spaceguy.jpg?width=1170&height=1170",
    "https://media.discordapp.net/attachments/828346862993014834/887824454628024340/RAMEN_REAL.jpg?width=1170&height=1170",
    "https://media.discordapp.net/attachments/828346862993014834/885311365395394650/image0.jpg?width=1170&height=1170",
    "https://media.discordapp.net/attachments/828346862993014834/884884615305777222/image0.jpg?width=1170&height=1170",
  ];

  return (
    <Box style={styles.sidebar}>
      <Center>
        <Box style={styles.icon}>
          <MoonIcon />
        </Box>
      </Center>
      <Center>
        <FlatList
          data={images}
          renderItem={({ item, index }) => (
            <Box style={styles.listItem} key={index}>
              <Avatar source={{ uri: item }} />
            </Box>
          )}
        />
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: 80,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    paddingTop: 48,
  },
  listItem: {
    paddingVertical: 4,
  },
  icon: {
    height: 48,
    width: 48,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
});
export default Sidebar;
