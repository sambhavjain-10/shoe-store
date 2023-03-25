import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FiltersM from "./components/FiltersM";
import SortM from "./components/SortM";
import CartM from "./components/CartM";
import Product from "./components/Product";
import Filter from "react-native-vector-icons/AntDesign";
import Sort from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "react-native-vector-icons/Feather";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ products: [] });
  const [filters, setFilters] = useState({
    category: [],
    price: { gt: "0", lt: "99999" },
    color: [],
    sort: "",
  });
  const [filterModal, setFilterModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    axios
      .post("http://192.168.43.69:5000/api/products/filtered", filters)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, [filters]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Sort.Button
          name="sort"
          backgroundColor="transparent"
          size={20}
          onPress={() => setSortModal(true)}
        />
        <Filter.Button
          name="filter"
          backgroundColor="transparent"
          size={20}
          onPress={() => setFilterModal(true)}
        />
        <Cart.Button
          name="shopping-cart"
          backgroundColor="transparent"
          size={20}
          onPress={() => setCartModal(true)}
        >
          <Text>{cart.products.length}</Text>
        </Cart.Button>
      </View>
      <Text>Found {products.length} Shoes</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product
            id={item._id}
            name={item.name}
            price={item.price}
            cart={cart}
            setCart={setCart}
          />
        )}
        numColumns={2}
        keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
      <FiltersM
        setFilterModal={setFilterModal}
        filterModal={filterModal}
        filters={filters}
        setFilters={setFilters}
      />
      <SortM
        setSortModal={setSortModal}
        sortModal={sortModal}
        filters={filters}
        setFilters={setFilters}
      />
      <CartM
        cart={cart}
        setCart={setCart}
        cartModal={cartModal}
        setCartModal={setCartModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
