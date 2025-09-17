import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const GuestsModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [guests, setGuests] = useState(1);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Select Guests</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setGuests(Math.max(1, guests - 1))}>
              <Text style={styles.button}>➖</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{guests}</Text>
            <TouchableOpacity onPress={() => setGuests(guests + 1)}>
              <Text style={styles.button}>➕</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalBox: { margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
  button: { fontSize: 30, paddingHorizontal: 20 },
  count: { fontSize: 24, marginHorizontal: 20 },
  closeBtn: { marginTop: 15, alignItems: 'center' },
  closeText: { color: 'blue' },
});

export default GuestsModal;
