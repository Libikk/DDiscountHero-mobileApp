import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image, ImageBackground, StyleSheet, ScrollView, SafeAreaView, FlatList   } from 'react-native';

const Product = (props) => {
    const { productUrl, hostName, imageUrl, productName, productId, isActive, isPromo, productDiscountedPrice, productPrice } = props.product;
    console.log('isPromo', props)
    return (
    <View style={styles.singleProductWrapper}>
        <Text>{hostName}</Text>
        <View>
            <Image style={{ resizeMode: 'center', width: 150, height: 150 }} source={{ uri: imageUrl }} />
        </View>
        <Text>{productName}</Text>
        <View style={styles.body}>
            {(productDiscountedPrice && productPrice) ?
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, width: 150}}>
                    <Text style={[{ textAlign: 'center', fontSize: 14, textDecorationLine: 'line-through', paddingRight: 10, maxWidth: 100 }]}>
                        {productPrice.trim()}
                    </Text>
                    <Text style={{ textAlign: 'center', paddingRight: 10 }}>--></Text>
                    <Text style={[{ textAlign: 'left', fontWeight: 'bold', fontSize: 18 }, styles.greenColor]}>{productDiscountedPrice.trim()}</Text>
                </View> :
                <View>
                    <Text>Product prices are not available yet</Text>
                </View>
            }
        </View>
    </View>)
}

const ProductList = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Button title={'X'} onPress={() => props.setDiscountedProducts([])}/>
                    </View>
                    <FlatList
                        data={props.products}
                        renderItem={({item}) => <Product product={item}/>}
                        keyExtractor={item => item.productId}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    greenColor: {
        color: '#3fc23f',
    },

    singleProductWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    }
  });

export default ProductList;