
import React, {createContext, useState, useCallback, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from './pages/GlobalStyles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyScreen,MyButton } from "./pages/MyScreen.js";
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
  const [ pressCount , setPressCount ] = useState( 0 );
  const [ imageId, setImageId ] = useState( 0 );

//  const MyDummyFunc = () => {
//    console.log("my dummy func",pressCount );
//    setPressCount( 10 );
//  }

  function incrementCounter ( value ) {
    console.log( "value: ",value," pressCount:",pressCount );
    setPressCount( pressCount + 1 );
  }

  useEffect( ()=>{
    setImageId( Math.floor(Math.random() * database.length ) );

  },[pressCount]);
  
  function MyScreenWrapper(){
    return (
      <>
      <Text style={{textAlign:'center'}}>{pressCount}</Text>
      <MyScreen database={database} pressCount={ pressCount } initImage={ imageId } onGuess={ incrementCounter } />
      </>
    )
  }
  
  return (
    <>
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="MyScreen" component={ MyScreenWrapper }  />
          <Tab.Screen name="MyScreen2" component={ MyScreen2 } />
        </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

