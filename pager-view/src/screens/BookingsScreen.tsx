// screens/BookingsScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export const BookingsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
   
      <View style={{ width: "100%", marginTop: height * 0.03, alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
          Your Bookings
        </Text>

       
        <View
          style={{
            width: "100%",
            height: 0.5,
            backgroundColor: "#ccc",
            marginTop: 0.55,
            opacity: 0.5,
          }}
        />
      </View>

      
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  source={require("../../assets/img2.jpg")}
                  style={{
                    width: width * 0.7,
                    height: width * 0.85,
                    borderRadius: 12,
                    resizeMode: "cover",
          }}
        />
      </View>

      <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", marginTop: 20 }}>
        You should sign in first
      </Text>
      <Text style={{ color: "#444", fontSize: 13, textAlign: "center", marginTop: 8 }}>
        Sign in to complete the payment process
      </Text>

      
      <TouchableOpacity
        style={{
          backgroundColor: "#333", 
            paddingVertical: 12,
            width: width * 0.85,        
            borderRadius: 30,           
            marginTop: 26,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,            
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
