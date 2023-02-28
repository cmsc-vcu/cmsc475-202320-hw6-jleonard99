
import { StyleSheet, Text, View, Image } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartoon: {
        width:200,
        height:300
    },
    imageName:{
        textAlign: 'center'
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

