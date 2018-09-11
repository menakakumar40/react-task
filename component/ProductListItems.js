import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductListItems.style";

function ProductListItems({ product }) {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconView}>
        <Image
          source={{ uri: product.image }}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View>
      
        <View style={styles.callerDetailsContainerWrap}>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {product.title}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={{ fontWeight: "bold", color: "red" }}>
                ({product.rating}
                /5)
              </Text>
            </View>
          </View>
          <View style={styles.rightHeaderContainer}>
            <Text style={{ margin: 5, color: "green", fontWeight: "bold" }}>
              {product.price}
            </Text>
          </View>
        </View>
      
    </View>
  );
}
export default ProductListItems;
