import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Product } from '@utils/Product';
import api from '@api/Api';
import styles from './ProductDetailScreen.styles';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const [product, setProduct] = useState<Product | null>(null);
  const [EditmodalVisible, setEditModalVisible] = useState(false);
  const [DeletemodalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    api
      .get<Product>(`/products/${route.params.id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Erro ao carregar detalhes', error));
  }, [route.params.id]);

  if (!product) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
            <Text style={styles.originalPrice}>R$ {product.discountPercentage.toFixed(2)}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.editButton} onPress={() => {}}>
          <Text style={styles.buttonText}>
            Editar <MaterialIcons name="edit" size={16} color="#fff" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={() => {
          setDeleteModalVisible(true)
        }}>
          <Text style={styles.buttonText}>
            Excluir <MaterialCommunityIcons name="trash-can-outline" size={16} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={DeletemodalVisible}
        animationType="fade"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Excluir produto</Text>
              <Pressable onPress={() => setDeleteModalVisible(false)}>
                <Ionicons name="close" size={22} color="#8E8E8E" />
              </Pressable>
            </View>
            <Text style={styles.modalMessage}>Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita.</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
