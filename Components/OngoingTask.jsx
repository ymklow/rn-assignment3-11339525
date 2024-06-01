import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OngoingTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ongoing Task</Text>
      <FlatList
        data={[
          { key: "Mobile App Development" },
          { key: "Web Development" },
          { key: "Push Ups" },
          { key: "Squats" },
          { key: "Yoga" },
          { key: "Meditation" },
          { key: "Software Engineering" },
          { key: "Data Structures" },
          { key: "Algorithms" },
          { key: "React Native" },
          { key: "React Js" },
          { key: "Node Js" },
          { key: "Express Js" },
          { key: "MongoDB" },
          { key: "Editing" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#E8D1BA'
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  card: {
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    justifyContent: "center",
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});

export default OngoingTask;