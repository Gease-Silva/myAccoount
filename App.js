import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import SignupSuccess from './src/pages/signupSuccess';
import Recover from './src/pages/recover';
import RecoverSuccess from './src/pages/recoverSuccess';
import Home from './src/pages/home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="RecoverSuccess" component={RecoverSuccess} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

