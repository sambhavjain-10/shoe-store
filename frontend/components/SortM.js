import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";

const SortM = ({ setSortModal, sortModal, filters, setFilters }) => {
  const onPress = option => {
    setFilters({
      ...filters,
      sort: option,
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={sortModal}
      onRequestClose={() => {
        setSortModal(!sortModal);
      }}
      transparent={true}
    >
      <View style={styles.sort}>
        <Text style={styles.heading}>Sort By</Text>
        <Pressable
          onPress={() => onPress("lth")}
          style={styles.options}
          android_ripple={{ color: "grey" }}
        >
          <Text>Low to High</Text>
        </Pressable>
        <Pressable
          onPress={() => onPress("htl")}
          style={styles.options}
          android_ripple={{ color: "grey" }}
        >
          <Text>High To Low</Text>
        </Pressable>
        <Pressable
          onPress={() => onPress("new")}
          style={styles.options}
          android_ripple={{ color: "grey" }}
        >
          <Text>Newly Added</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default SortM;

const styles = StyleSheet.create({
  sort: {
    height: "28%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    paddingTop: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
  },
  options: {
    alignItems: "center",
    width: "90%",
    margin: 10,
    paddingVertical: 10,
  },
});
