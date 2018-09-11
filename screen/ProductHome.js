import React from "react";
import { View, Text } from "react-native";
import { ProductDetails } from "../container";

class Producthome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProductDetails />
      </View>
    );
  }
}
export default Producthome;
