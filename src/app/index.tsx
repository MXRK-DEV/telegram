import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  LogBox.ignoreAllLogs()
    return (
        <Redirect href={"/(auth)/login"} />
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
