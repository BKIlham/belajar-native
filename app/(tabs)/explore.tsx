import "@/global.css";
import React from 'react';
import { Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="bg-blue-100 p-6 rounded-2xl border border-blue-200 shadow-sm">
        <Text className="text-2xl font-bold text-blue-800 mb-2">
          Halaman Explore 🌎
        </Text>
        <Text className="text-gray-600 text-center">
          Ini halaman kedua.
        </Text>
      </View>
    </View>
  );
}