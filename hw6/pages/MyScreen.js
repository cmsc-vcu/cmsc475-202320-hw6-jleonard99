import React, {useState,useEffect} from 'react';
import { Pressable, StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Card } from 'react-native-elements';

import { globalStyles } from './GlobalStyles';
// import { database } from './MyDatabase';


export function MyButton( props ){
    return (
     <Pressable
        onPress={() => {
          props.onPressed();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'darkcyan' : 'cyan',
          },
          globalStyles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={globalStyles.text}>{ props.name }</Text>
        )}
      </Pressable>        
    );
}


export function MyScreen( {database, pressCount, initImage, onGuess } ) {

    const [ imageId, setImageId ] = useState(initImage);
    const [ modalVisible, setModalVisible] = useState(false);
    const [ guess, setGuess ] = useState( imageId );

    // Passed to MyButton and triggered when button is pressed

    function DoMe( i ){
      setGuess( i );
      if (imageId==i){
        setModalVisible( false );
//        setImageId( Math.floor(Math.random() * database.length ) );
        onGuess( pressCount + 1 );
      } else {
        setModalVisible( true );
      }
    }
    
    return (
      <View style={globalStyles.container}>
        <Card>
          <Image style={globalStyles.cartoon} source={database[imageId].image} />
          <Text>{database[imageId].notes}</Text>
        </Card>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>
          <View style={globalStyles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={globalStyles.modalText}>Sorry, {database[guess].name} is incorrect!</Text>
              <Pressable
                style={[globalStyles.button, globalStyles.buttonClose]}
                onPress={() => {
                   setModalVisible(!modalVisible);
                } }>
                <Text style={globalStyles.textStyle}>Try Again!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{flex: 0, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
            { database.map( (item)=>{
                return (
                <MyButton onPressed={()=>{DoMe( item.id)}} key={item.id} name={item.name} id={item.id} />
                );
            })}
        </View>
      </View>
    );
  }

