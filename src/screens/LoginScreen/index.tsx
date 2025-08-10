import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuth } from '@context/AuthContext';
import styles from './LoginScreen.styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = async (): Promise<void> => {
    const newErrors: typeof errors = {};

    if (!username.trim()) newErrors.username = 'Campo obrigatório';
    if (!password.trim()) newErrors.password = 'Campo obrigatório';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (username.toLocaleLowerCase().trim() === 'admin' && password.toLocaleLowerCase().trim() === 'admin') {
      const userData = {
        id: '1',
        name: 'Exemplo Usuário',
        email: 'email@example.com',
      };
      try {
        await login(userData);
        setLoginError('');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs' }],
        });
      } catch {
        setLoginError('Erro ao fazer login. Tente novamente.');
      }
    } else {
      setLoginError('Usuário ou senha inválidos');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitle}>Insira seus dados para entrar na sua conta.</Text>
        </View>

        <View style={styles.formContainer}>
          {loginError !== '' && <Text style={styles.loginError}>{loginError}</Text>}

          <Text style={styles.label}>Nome:</Text>
          <TextInput
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setErrors((prev) => ({ ...prev, username: undefined }));
              setLoginError('');
            }}
            style={[styles.input, errors.username && styles.inputError]}
            placeholder="Digite seu nome de usuário"
            autoCapitalize="none"
          />
          {errors.username && <Text style={styles.errorText}> {errors.username}</Text>}

          <Text style={styles.label}>Senha:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({ ...prev, password: undefined }));
                setLoginError('');
              }}
              secureTextEntry={!showPassword}
              style={[styles.input, errors.password && styles.inputError, { flex: 1 }]}
              placeholder="Digite sua senha"
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <MaterialCommunityIcons
                  name="eye-outline"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 3, bottom: 3 }}
                />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off-outline"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 3, bottom: 3 }}
                />
              )}
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>⚠ {errors.password}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
