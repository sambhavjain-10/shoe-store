import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import shoeImg from "../assets/L1.png";

const CartM = ({ cart, setCart, cartModal, setCartModal }) => {
  const removeProduct = id => {
    setCart({
      ...cart,
      products: cart.products.filter(product => product.id !== id),
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={cartModal}
      onRequestClose={() => {
        setCartModal(!cartModal);
      }}
      transparent={true}
    >
      <View style={styles.cart}>
        <Text style={styles.heading}>Cart({cart.products.length})</Text>
        {cart.products.length == 0 && <Text>Your Cart is Empty</Text>}
        <FlatList
          data={cart.products}
          renderItem={({ item }) => (
            <View style={styles.Container}>
              <Image style={styles.Img} source={shoeImg} />
              <View style={styles.productInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs {item.price}/-</Text>
                <Button
                  onPress={() => removeProduct(item.id)}
                  title="Remove"
                  color="grey"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Modal>
  );
};

export default CartM;

const styles = StyleSheet.create({
  cart: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    paddingTop: 10,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
  },
  Container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
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
