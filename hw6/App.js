
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from './pages/GlobalStyles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyScreen } from "./pages/MyScreen.js";

const Tab = createBottomTabNavigator();

function MyScreen2() {
  return (
    <View style={globalStyles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

function App() {
  return (
    <>
    <MyScreen />
    </>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MyScreen" component={MyScreen} />
        <Tab.Screen name="MyScreen2" component={MyScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
