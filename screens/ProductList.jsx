import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Button, Image, ImageBackground, StyleSheet, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Linking } from 'expo';
import { UserProducts } from '../services/userProducts';


const Product = (props) => {
  const { productUrl, hostName, imageUrl, productName, productId, isActive, isPromo, productDiscountedPrice, productPrice } = props.product;

  return (
    <View style={styles.singleProductWrapper}>
      <Text>{hostName}</Text>
      <View>
        {imageUrl ? <Image style={{ resizeMode: 'center', width: 150, height: 150 }} source={{ uri: imageUrl }} /> : null}
      </View>
      <Button onPress={() => Linking.openURL(productUrl)} title="Open product" />
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
              <Text>Product prices are not available yet</Text>
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
    alignItems: 'center',
    padding: 15,
  },
  greenColor: {
    color: '#3fc23f',
  },

  singleProductWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;
