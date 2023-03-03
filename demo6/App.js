
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { styles } from './GlobalStyles';
import { MyScreen } from './pages/MyScreen';

const Tab = createBottomTabNavigator();

function MyScreen2() {
  return (
    <View style={styles.container}>
      <Card>
        <Image style={styles.imageStyle} source={require("./assets/spongebob.png")} />
      </Card>
      <Text>MyScreen 2</Text>
    </View>
  );
}

// https://reactnavigation.org/docs/navigation-container

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Screen" component={MyScreen} />
        <Tab.Screen name="My Screen 2" component={MyScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
