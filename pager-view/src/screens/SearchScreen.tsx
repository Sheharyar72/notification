
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LocationModal from "../components/LocationModal";
import CalendarModal from "../components/CalendarModal";
import GuestsModal from "../components/GuestsModal";

export const SearchScreen = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where to and when?</Text>

      <TouchableOpacity style={styles.box} onPress={() => setShowLocation(true)}>
        <Text style={styles.boxText}>📍 Choose area in Riyadh</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => setShowCalendar(true)}>
        <Text style={styles.boxText}>📅 Check-in and check-out date</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => setShowGuests(true)}>
        <Text style={styles.boxText}>👤 Guests</Text>
      </TouchableOpacity>

      <LocationModal visible={showLocation} onClose={() => setShowLocation(false)} />
      <CalendarModal visible={showCalendar} onClose={() => setShowCalendar(false)} />
      <GuestsModal visible={showGuests} onClose={() => setShowGuests(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
  },
  boxText: {
    fontSize: 16,
  },
});
