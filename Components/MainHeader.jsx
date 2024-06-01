import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const MainHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Hello, devs</Text>
        <Text style={styles.subHeaderText}>14 tasks today</Text>
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/profile.png")}
          style={{ width: 45, height: 45 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 12,
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainHeader;