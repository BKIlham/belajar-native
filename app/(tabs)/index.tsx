import "@/global.css";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function App() {
  const [likes, setLikes] = useState(0);

  const handlePress = () => {
    setLikes(likes + 1);
  };
  
  return(
    <View className="flex-1 bg-[#f0f2f5] items-center justify-center">
      <View className="bg-white p-5 rounded-2xl items-center w-4/5 shadow-md shadow-black/25">
        <Image
          source={{ uri: 'https:reactnative.dev/img/tiny_logo.png' }}
          className="w-28 h-28 rounded-[50px] mb-4"
        />
        <Text className="text-xl font-bold mb-1">FrontEnd</Text>
        <Text className="text-base text-gray mb-5">React Native Beginner</Text>
        
        <View className="mb-5 p-3 bg-[#e1f5fe] rounded-lg">
          <Text className="text-xl font-bold text-[#0288d1]">{likes} Likes</Text>
        </View>
        
        <Pressable
          onPress={handlePress}
          className="bg-[#2196F3] py-3 px-7 rounded-3xl active:bg-[#1976D2] active:opacity-80"
        >
          <Text className="text-white text-base font-semibold">Like Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}