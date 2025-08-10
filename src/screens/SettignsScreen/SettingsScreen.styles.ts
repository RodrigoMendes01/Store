import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2567E8',
  },
  header: {
    height: 180,
    backgroundColor: '#2567E8',
  },
  userCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    position: 'relative',
    top: -80,
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  containerOptions: {
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    width: '100%',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 500,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#E63535',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '80%',
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalMessage: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#eee',
    marginRight: 8,
  },
  cancelText: {
    color: '#333',
  },
  confirmButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#FF3B30',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default styles;
