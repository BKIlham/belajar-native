import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [likes, setLikes] = useState(0);

  const handlePress = () => {
    setLikes(likes + 1);
  };
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https:reactnative.dev/img/tiny_logo.png' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>FrontEnd</Text>
        <Text style={styles.role}>React Native Beginner</Text>
        
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>{likes} Likes</Text>
        </View>
        
        <Pressable
          style= {({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Like Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width:0,height:2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e1f5fe',
    borderRadius: 8,
  },
  statsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0288d1',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonPressed: {
    backgroundColor: '#1976D2',
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  },
})