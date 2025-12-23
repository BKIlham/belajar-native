import "@/global.css";
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function DetailTransaction() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white p-5 justify-center items-center">
      
      <View className="bg-slate-50 p-8 rounded-2xl w-full items-center border border-slate-200">
        <Text className="text-6xl mb-4">
          {params.type === 'in' ? '💰' : '💸'}
        </Text>
        
        <Text className="text-2xl font-bold text-slate-800 text-center mb-2">
          {params.title}
        </Text>
        
        <Text className={`text-3xl font-bold mb-8 ${params.type === 'in' ? 'text-green-600' : 'text-red-500'}`}>
          {params.amount}
        </Text>

        <View className="w-full border-t border-slate-200 pt-4">
          <Text className="text-slate-400 text-center">
            Transaksi ID: #{params.id}
          </Text>
          <Text className="text-slate-400 text-center">
            Tanggal: {params.date}
          </Text>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => router.back()}
        className="mt-8 bg-slate-800 py-3 px-8 rounded-full"
      >
        <Text className="text-white font-bold">Kembali</Text>
      </TouchableOpacity>

    </View>
  );
}