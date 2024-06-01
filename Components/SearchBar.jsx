import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Image
          source={require("../assets/mynaui_search.png")}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="gray"
        />
      </View>
      <Image
        source={require("../assets/Filter.png")}
        style={styles.filterIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'black',
    padding: 10,
  },
  searchbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  filterIcon: {
    width: 48,
    height: 48,
  },
});

export default SearchBar;