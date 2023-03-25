import React from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import SelectMultiple from "react-native-select-multiple";

const color = ["red", "black", "white", "blue"];
const category = ["loafers", "sneakers"];

const FiltersM = ({ setFilterModal, filterModal, filters, setFilters }) => {
  const onColorChange = selectedColors => {
    const selected = selectedColors.map(colors => colors.value);
    setFilters({
      ...filters,
      color: selected,
    });
  };

  const onCategoryChange = selectedCategory => {
    const selected = selectedCategory.map(Category => Category.value);
    setFilters({
      ...filters,
      category: selected,
    });
  };

  const onChangeGt = number => {
    setFilters({
      ...filters,
      price: { ...filters.price, gt: number },
    });
  };

  const onChangeLt = number => {
    setFilters({
      ...filters,
      price: { ...filters.price, lt: number },
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={filterModal}
      onRequestClose={() => {
        setFilterModal(!filterModal);
      }}
      transparent={true}
    >
      <View style={styles.filters}>
        <Text style={styles.heading}>Filters</Text>
        <Text>Colors</Text>
        <SelectMultiple
          items={color}
          selectedItems={filters.color}
          onSelectionsChange={onColorChange}
        />
        <Text>Category</Text>
        <SelectMultiple
          items={category}
          selectedItems={filters.category}
          onSelectionsChange={onCategoryChange}
        />
        <Text>Minimum Price</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeGt}
          value={filters.price.gt}
          keyboardType="numeric"
        />
        <Text>Maximum Price</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLt}
          value={filters.price.lt}
          keyboardType="numeric"
        />
      </View>
    </Modal>
  );
};

export default FiltersM;

const styles = StyleSheet.create({
  filters: {
    height: "75%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    paddingTop: 10,
  },
  heading: {
    fontSize: 25,
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
  },
});
