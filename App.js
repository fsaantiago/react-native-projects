import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import { Card } from 'react-native-paper';
import styles from './styles/stylesSheets';
import LoginScreen from './login/LoginScreen'
import SecondScreen from './login/SecondScreen'

const Stack = createStackNavigator();

class App extends Component {
   render() {
     return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     )
   }
}

export default App;