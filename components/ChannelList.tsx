import React from "react";
import { Text, Box, FlatList, Image } from "native-base";
import { StyleSheet } from "react-native";
import { style } from "styled-system";

export type ChannelListProps = {};

const ChannelList: React.FC<ChannelListProps> = (props) => {
  const channels = new Array(8).fill("Channel");
  return (
    <Box style={styles.channelList}>
      <Box style={styles.serverInfo}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="Alternate Text"
          size="xl"
          style={styles.serverBackground}
        />
        <Text
          style={styles.serverTitle}
          fontSize="2xl"
          color="#fff"
          fontWeight="bold"
        >
          First Channel
        </Text>
      </Box>
      <FlatList
        style={styles.list}
        data={channels}
        renderItem={({ item, index }) => (
          <Box key={index}>
            <Text fontSize="lg" style={styles.listItem}>
              #{item}-{index}
            </Text>
          </Box>
        )}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  serverInfo: {
    position: "relative",
  },
  serverBackground: {
    width: "100%",
  },
  serverTitle: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  channelList: {
    height: "100%",
    width: 260,
    backgroundColor: "#353b48",
    borderRadius: 8,
    overflow: "hidden",
  },
  list: {
    padding: 8,
  },
  listItem: {
    color: "#fff",
    padding: 8,
  },
});

export default ChannelList;
