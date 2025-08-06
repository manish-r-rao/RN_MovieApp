import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css"


export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="MovieScreen" options={{headerShown:false}}/>
        <Stack.Screen name="PersonScreen" options={{headerShown:false}}/>
        <Stack.Screen name="SearchScreen" options={{headerShown:false}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
