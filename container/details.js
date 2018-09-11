import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductList } from "../actionCreator/Product";
import { ProductListItems } from "../component";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.actions.getProductList();
  }

  _productDetailsItem({ item: product }) {
    return <ProductListItems product={product} />;
  }

  render() {
    const { products, Loading } = this.props;
    products.sort(function(a, b) {
      return b.price - a.price;
    });
    
    return (
      
      <View style={{marginTop:30}}>
                
      <View
            style={{ flex: 7, alignItems: "center", justifyContent: "center", marginTop:20 }}
          >
            <Text style={{fontSize:18, fontWeight:"bold", color:"purple"}}>Products List </Text>
          </View>
          {Loading && <ActivityIndicator size="large" color="#9400D3" style={{marginTop:100}} />} 
          <View>
        <FlatList
          data={products}
          keyExtractor={(p, i) => `${p.id}`}
          renderItem={this._productDetailsItem}
        />

          </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.ProductList.products,
    Loading: state.ProductList.Loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProductList }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
