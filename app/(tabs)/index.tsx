import "@/global.css";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TRANSACTIONS = [
  {id: '1', title: "Gaji Bulanan", date: "25 Des", amount: "+Rp 8.000.000", type: "in"},
  {id: '2', title: "Spotify Premium", date: "24 Des", amount: "-Rp 55.000", type: "out"},
  {id: '3', title: "Makan Siang", date: "24 Des", amount: "-Rp 35.000", type: "out"},
  {id: '4', title: "Freelance Project", date: "22 Des", amount: "+Rp 2.500.000", type: "in"},
  {id: '5', title: "Isi Bensin", date: "20 Des", amount: "-Rp 40.000", type: "out"},
  {id: '6', title: "Tarik Tunai", date: "19 Des", amount: "-Rp 100.000", type: "out"},
  {id: '7', title: "Belanja Bulanan", date: "18 Des", amount: "-Rp 500.000", type: "out"},
  {id: '8', title: "Kopi Kenangan", date: "17 Des", amount: "-Rp 22.000", type: "out"},
  {id: '9', title: "Kopi Kenangan", date: "18 Des", amount: "-Rp 22.000", type: "out"},
  {id: '10', title: "Kopi Kenangan", date: "19 Des", amount: "-Rp 22.000", type: "out"},
  {id: '11', title: "Kopi Kenangan", date: "20 Des", amount: "-Rp 22.000", type: "out"},
  {id: '12', title: "Kopi Kenangan", date: "21 Des", amount: "-Rp 22.000", type: "out"},
  {id: '13', title: "Kopi Kenangan", date: "22 Des", amount: "-Rp 22.000", type: "out"},
  {id: '14', title: "Kopi Kenangan", date: "23 Des", amount: "-Rp 22.000", type: "out"},
  {id: '15', title: "Kopi Kenangan", date: "24 Des", amount: "-Rp 22.000", type: "out"},
];

export default function App() {
  const router = useRouter();
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity 
      className="bg-white p-4 mb-3 rounded-xl flex-row justify-between items-center shadow-sm border border-slate-100"
      onPress={() => router.push({
        pathname: "/detail/[id]",
        params: {
          id : item.id,
          title: item.title,
          amount: item.amount,
          date: item.date,
          type: item.type
        }
      })}
    >
      <View className="flex-row items-center gap 3">
        <View className={`w-10 h-10 rounded-full items-center justify-center ${item.type === 'in' ? 'bg-green-100' : 'bg-red-100'}`}>
          <Text className="text-xl">{item.type === 'in' ? '💰' : '💸'}</Text>
        </View>
        
        <View className="ml-2">
          <Text className="font-bold text-slate-800 text-base">{item.title}</Text>
          <Text className="text-slate-400 text-xs">{item.date}</Text>
        </View>
      </View>
      
      <Text className={`font-bold ${item.type === 'in' ? 'text-green-600' : 'text-red-600'}`}>
        {item.amount}
      </Text>
    </TouchableOpacity>
  );
  return(
    <SafeAreaProvider className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-10 bg-white">
        <Text className="text-3xl font-bold text-slate-800 mb-6 ">
          DompetKu 💳
        </Text>
        
        <FlatList
          data={TRANSACTIONS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator= {false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaProvider>
  );
}