import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import { styles } from './GlobalStyles';
import { MyScreen } from './pages/MyScreen';

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

export default function App() {
  return (
    <MyScreen />
  );
}



