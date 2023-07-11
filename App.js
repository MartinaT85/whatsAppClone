import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';


export default function App() {
  

  return (
    <React.StrictMode>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChatScreen />
    </View>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
