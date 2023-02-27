
import { StyleSheet, Text, View, Image } from 'react-native';
import {styles} from '../GlobalStyles';
import { Card } from 'react-native-elements';


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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle: {
      width: 200,
      height: 300
    }
  });

