
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';


import { styles } from '../GlobalStyles';


export function MyScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Image style={styles.imageStyle} source={require("../assets/cartoonish.jpg")} />
      </Card>
      <Text>MyScreen From a file</Text>
    </View>
  );
}

