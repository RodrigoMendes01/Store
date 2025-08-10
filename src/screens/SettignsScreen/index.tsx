import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@context/AuthContext';
import styles from './SettingsScreen.styles';

const SettingsScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.userCard}>
        <View style={styles.avatarContainer}>
          <Image source={require('../../assets/images/avatar.jpg')} style={styles.avatar} />
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userEmail}>{user?.email}</Text>

          <View style={styles.containerOptions}>
            <TouchableOpacity style={styles.option}>
              <Ionicons name="person-outline" size={32} color="#333" />
              <Text style={styles.optionText}>Meus dados</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Ionicons name="notifications-outline" size={32} color="#333" />
              <Text style={styles.optionText}>Notificações</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Ionicons name="document-text-outline" size={32} color="#333" />
              <Text style={styles.optionText}>Termos de uso</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Sair da conta</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} color="#333" />
              </Pressable>
            </View>
            <Text style={styles.modalMessage}>Você tem certeza que deseja sair da conta?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={logout}>
                <Text style={styles.confirmText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
