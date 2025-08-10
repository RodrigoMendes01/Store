import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { useAuth } from '../context/AuthContext';
import BottomTabNavigator from '../components/BottomTabNavigator';

export type RootStackParamList = {
  Login: undefined;
  Products: undefined;
  ProductDetail: { id: number };
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Tabs" component={BottomTabNavigator} />
          <Stack.Screen
            name="Products"
            component={ProductListScreen}
            options={{ headerShown: true, title: 'Produtos' }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{ headerShown: true, title: 'Detalhes' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
