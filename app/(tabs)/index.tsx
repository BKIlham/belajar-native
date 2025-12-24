import "@/global.css";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  }
}

export default function App() {
  const router = useRouter();
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      })
  })
  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity 
      className="bg-white p-4 mb-3 rounded-xl border border-slate-100 flex-row item-center gap-4"
      onPress={() => alert(`Kamu memilih ${item.name}`)}
    >
      <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
        <Text className="text-xl font-bold text-blue-600">
          {item.name.charAt(0)}
        </Text>
      </View>
      
      <View>
        <Text className="font-bold text-slate-800 text-lg">{item.name}</Text>
        <Text className="text-slate-500 text-sm">{item.email}</Text>
        <Text className="text-blue-500 text-xs mt-1">🏢 {item.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return(
    <SafeAreaProvider className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-5 bg-white">
        <Text className="text-3xl font-bold text-slate-800 mb-6 ">
          Daftar User API 🌐
        </Text>
        
        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#2563eb"/>
            <Text className="text-slate-400 mt-2">Mengambil data...</Text>
          </View>
        ) : (
        
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator= {false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
}