import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import shoeImg from "../assets/L1.png";

const Product = ({ id, name, price, cart, setCart }) => {
  const addToCart = () => {
    setCart({
      ...cart,
      products: [...cart.products, { id, name, price }],
    });
  };

  return (
    <View style={styles.Container}>
      <Image style={styles.Img} source={shoeImg} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Rs {price}/-</Text>
      <Button
        onPress={addToCart}
        title="Add To Cart"
        color="grey"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 10,
  },
  Img: {
    height: 170,
    width: 170,
  },
  name: {
    fontSize: 25,
    textTransform: "capitalize",
  },
});
