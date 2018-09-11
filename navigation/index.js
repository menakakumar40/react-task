import React from "react";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ProductHome from "../screen/ProductHome";
import Productsearch from "../screen/ProductSearch";
import {
  createStackNavigator  
} from "react-navigation";

export default (AppNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: ProductHome,
      navigationOptions: () => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-home"
                  : "ios-home-outline"
                : "md-home"
            }
            style={{ color: tintColor }}
          />
        )
      }),
          
    },
    Search: {
      screen: Productsearch,
  
      navigationOptions: () => ({
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-search"
                  : "ios-search-outline"
                : "md-search"
            }
            style={{ color: tintColor }}
          />
        )
      }),
  
    }
  }
));
