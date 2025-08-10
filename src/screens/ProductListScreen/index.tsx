import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CategoryTabs from '@components/CategoryTabs';
import ProductCard from '@components/ProductCard';
import FloatingButton from '@components/FloatingButton';

import api from '@api/Api';
import { Product } from '@utils/Product';
import { CATEGORIES_MALE } from '@utils/Categories';
import { RootStackParamList } from '@navigation/AppNavigator';

const ProductListScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES_MALE[0]);
  const [genderTab, setGenderTab] = useState<'male' | 'female'>('male');

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get<{ products: Product[] }>(`/products/category/${selectedCategory}`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error('Erro ao buscar produtos', error));
  }, [selectedCategory]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CategoryTabs
        genderTab={genderTab}
        setGenderTab={setGenderTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 8 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          />
        )}
      />

      <FloatingButton onPress={() => {}} />
    </SafeAreaView>
  );
};

export default ProductListScreen;
