import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={[
          {
            key: "Exercise",
            tasks: "12 Tasks",
            image: require("../assets/woman.png"),
          },
          {
            key: "Study",
            tasks: "12 Tasks",
            image: require("../assets/woman2.png"),
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.key}</Text>
            <Text style={styles.cardTasks}>{item.tasks}</Text>
            <Image source={item.image} style={styles.cardImage} />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#E8D1BA'
  },
  header: {
    fontSize: 20,
    fontWeight: "bolder",
    marginBottom: 10,
    color: "#333",
  },
  flatlist: {
    marginTop: 10,
  },
  card: {
    height: 180,
    width: 150,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardTasks: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 10,
  },
  cardImage: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
});

export default Categories;