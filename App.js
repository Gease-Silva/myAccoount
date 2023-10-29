import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import SuccessSignup from './src/pages/signup/success.js';
import Recover from './src/pages/recover';
import SuccessRecover from './src/pages/recover/success.js';
import Home from './src/pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="SuccessRecover" component={SuccessRecover} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
