import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Product } from '@utils/Product';

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={{ uri: product.thumbnail }} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.description}>{product.description}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      {product.price < 50 && <Text style={styles.oldPrice}>R$ 50,00</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    marginHorizontal: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginVertical: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  oldPrice: {
    marginLeft: 6,
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
});

export default ProductCard;
