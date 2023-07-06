import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

export default function App() {
  const chat = {
    id: "1",
    user: {
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      name: "Lukas",
    },
    lastMessage: {
      text: "Oke",
      createdAt: "07:30",
    },
  };

  return (
    <React.StrictMode>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChatListItem chat={chat}/>
    </View>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
