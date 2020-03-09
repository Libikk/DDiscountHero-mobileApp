import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Linking } from 'expo';
import { UserProducts } from '../services/userProducts';


const Product = (props) => {
  const { productUrl, hostName, imageUrl, productName, productId, isActive, isPromo, productDiscountedPrice, productPrice } = props.product;
  const image = imageUrl ? { uri: imageUrl } : require('../assets/images/no-image.jpg')
  return (
    <View style={styles.singleProductWrapper}>
      <Text>{hostName}</Text>
      <View>
        <Image style={{ resizeMode: 'center', width: 130, height: 130 }} source={image} />
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(productUrl)}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#249624", marginVertical: 10, backgroundColor: '#d6cfc7', padding: 5 }}>Open product</Text>
      </TouchableOpacity>
      <Text>{productName}</Text>
      <View style={styles.body}>
        {(productDiscountedPrice && productPrice)
          ? (
            <View style={{
              flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, width: 150,
            }}
            >
              <Text style={[{
                textAlign: 'center', fontSize: 14, textDecorationLine: 'line-through', paddingRight: 10, maxWidth: 100,
              }]}
              >
                {productPrice.trim()}
              </Text>
              <Text style={{ textAlign: 'center', paddingRight: 10 }}>--></Text>
              <Text style={[{ textAlign: 'left', fontWeight: 'bold', fontSize: 18 }, styles.greenColor]}>{productDiscountedPrice.trim()}</Text>
            </View>
          )
          : (
            <View>
              <Text style={{ color: 'orange', marginBottom: 10 }}>Product prices preview is not available</Text>
            </View>
          )}
      </View>
    </View>
  );
};

const ProductList = () => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    UserProducts.getUserProducts()
      .then((userProd) => setUserProducts(userProd))
      .catch(console.log);
  }, []);

  const promotionItems = userProducts.filter(({ isPromo }) => isPromo);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={promotionItems}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={(item) => item.productId.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 30,
  },
  greenColor: {
    color: '#3fc23f',
  },

  singleProductWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 15,
  },
});

export default ProductList;
