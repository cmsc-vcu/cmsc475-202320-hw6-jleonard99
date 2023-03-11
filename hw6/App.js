
import React, {createContext, useState, useCallback} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from './pages/GlobalStyles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyScreen } from "./pages/MyScreen.js";
import { MyScreen2 } from "./pages/MyScreen2.js";
import { database } from "./pages/MyDatabase";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
    <MyScreen />
    </>
  );
}


export default function MyTabs() {
  const [ pressCount, setPressCount ] = useState( 0 );

//  const MyDummyFunc = () => {
//    console.log("my dummy func",pressCount );
//    setPressCount( 10 );
//  }

  const MyDummyFunc = useCallback( val => {setPressCount(val);},[]);
  
  function MyScreenWrapper(){
    return (
      <>
      <Text>{pressCount}</Text>
      <MyScreen database={database} buttonCount={ 4 } onGuess={ MyDummyFunc } />
      </>
    )
  }
  
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="MyScreen" component={ MyScreenWrapper } />
          <Tab.Screen name="MyScreen2" component={ MyScreen2 } />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
