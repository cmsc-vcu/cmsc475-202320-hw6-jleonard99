import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import { globalStyles } from './GlobalStyles';


var database = [
{name:"John Leonard",image:require("../assets/cartoonish.jpg")},
{name:"Mr. Krabs",image:require("../assets/mr-krabs.png")},
{name:"Spongebob Squarepants",image:require("../assets/spongebob-squarepants.png")}
];

function MyButton( props ){
    return (
     <Pressable
        onPress={() => {
          // setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'darkcyan' : 'cyan',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}> {pressed ? 'Pressed!' : props.name }</Text>
        )}
      </Pressable>        
    );
}

export function MyScreen() {
    var id = 0;

    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
      textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
      textLog = 'onPress';
    }
  
    var buttonNames = ["button1","button2","button3","button4"];
    return (
      <View style={globalStyles.container}>
        <Card>
          <Image style={globalStyles.cartoon} source={database[id].image} />
        </Card>

        <Text testID="pressable_press_console">{textLog}</Text>
        <View style={{flex: 0, flexDirection:"row", flexWrap:"wrap"}}>
            { database.map( (item)=>{
                return (
                <MyButton name={item.name}/>
                );
            })}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      textAlign: 'center'
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
      margin: 10,
      width: 140
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  });
  