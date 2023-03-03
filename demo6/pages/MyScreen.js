
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';


import { styles } from '../GlobalStyles';


var database = [
  {id:"0", name:"John Leonard",image:require("../assets/cartoonish.jpg")},
  {id:"1", name:"Mr. Krabs",image:require("../assets/mr-krabs.png")},
  {id:"2", name:"Spongebob Squarepants",image:require("../assets/spongebob-squarepants.png")},
  {id:"3", name:"Patrick Star",image:require("../assets/patrick-star.png")},
  {id:"4", name:"Sandy Cheeks",image:require("../assets/sandy-cheeks.png")},
  {id:"5", name:"Squidward Tentacles",image:require("../assets/squidward-tentacles.png")}
];


export function MyScreen() {

  var id = 0;

  return (
    <View style={styles.container}>
      <Card>
        <Image style={styles.imageStyle} source={database[id].image} />
        <Text>{database[id].name}</Text>
      </Card>
      <Text>MyScreen From a file</Text>
    </View>
  );
}

