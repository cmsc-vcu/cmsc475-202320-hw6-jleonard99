import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import { globalStyles } from './GlobalStyles';


var database = [
{id:"1", name:"John Leonard",image:require("../assets/cartoonish.jpg")},
{id:"2", name:"Mr. Krabs",image:require("../assets/mr-krabs.png")},
{id:"3", name:"Spongebob Squarepants",image:require("../assets/spongebob-squarepants.png")}
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
          globalStyles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={globalStyles.text}> {pressed ? 'Pressed!' : props.name }</Text>
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
                <MyButton key={item.id} name={item.name} id={item.id} />
                );
            })}
        </View>
      </View>
    );
  }

  