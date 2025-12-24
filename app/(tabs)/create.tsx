import { useRouter } from "expo-router";
import React, { useState } from "react";

import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateTransaction() {
    const router = useRouter();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSave = async () => {
        if(!title || !amount) {
            Alert.alert("Error", "Mohon isi semua data!");
            return;
        }
        
        setIsLoading(true);
        
        try {
            const response = await fetch('https:jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: amount,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            
            const json = await response.json();
            console.log('Success', json);
            
            Alert.alert("Success", "Data Berhasil Disimpan!", [
                {text:"OK", onPress: () => router.back()}
            ])
        } catch (error) {
            Alert.alert("Gagal", "Terjadi Kesalahan Koneksi");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <ScrollView className="flex-1 bg-white p-5">
                <Text className="text-2xl font-bold text-slate-800 mb-6 mt-10">Tambah Transaksi 📝</Text>
                <View className="mb-6">
                    <Text className="text-slate-600 mb-2 font-medium">Nama Transaksi</Text>
                    <TextInput
                        className="border border-slate-300 rounded-xl p-4 text-lg text-slate-800 focus:border-blue-500"
                        placeholder="Contoh: Beli Kopi"
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View className="mb-8">
                    <Text className="text-slate-600 mb-2 font-medium">Nominal (Rp)</Text>
                    <TextInput
                        className="border border-slate-300 rounded-xl p-4 text-lg text-slate-800 focus:border-blue-500"
                        placeholder="0"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity
                    onPress={handleSave}
                    disabled={isLoading}
                    className={`py-4 rounded-xl items-center shadow-sm ${isLoading ? 'bg-slate-300' : 'bg-blue-600'}`}
                >
                    {isLoading ? (
                        <ActivityIndicator color="white"/>
                    ) : (
                        <Text className="text-white font-bold text-lg">Simpan Data</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}