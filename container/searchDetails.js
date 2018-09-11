import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { productSearchFilter } from "../actionCreator/Product";
import { ProductListItems } from "../component";
// import { ArrayOfImages } from "../component/Image";

class SearchDetails extends Component {
  _productDetailsItem({ item: product }) {
    return <ProductListItems product={product} />;
  }

  _onProductSearchFilter = searchTerm => {
    const { products } = this.props;
    this.props.actions.productSearchFilter(searchTerm, products);
  };

  render() {
    //console.log("filterItem", this.props.filterItem.length);
    const { filterItem } = this.props;

    filterItem.sort(function(a, b) {
      return a.rating - b.rating;
    });
    console.log("TEst => ", filterItem.length);
    // filterItem.map((el, i) => {
    //   return (el.image = ArrayOfImages[i]);
    // });
    return (
      <View  style={styles.mainContainer}>
       
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={this._onProductSearchFilter}
        />
        {filterItem.length > 0 ? (
          <View>
            <FlatList
              data={filterItem}
              keyExtractor={(f, i) => `${f.id}`}
              renderItem={this._productDetailsItem}
            />
          </View>
        ) : (
          <View
            style={{ flex: 7, alignItems: "center", justifyContent: "center", marginTop:20 }}
          >
            <Text>No Search product data </Text>
          </View> 
        )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop:40
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
    //paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  contentContainer: {
    flex: 6
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  searchBar: {
    paddingLeft: 30,
    paddingBottom:10,
    paddingTop:10,
    fontSize: 22,
    height: 50,
    //flex: 1,
    borderWidth: 9,
    borderColor: "#E4E4E4"
  }
});

function mapStateToProps(state) {
  return {
    products: state.ProductList.products,
    Loading: state.ProductList.Loading,
    filterItem: state.ProductList.filterItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ productSearchFilter }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDetails);
