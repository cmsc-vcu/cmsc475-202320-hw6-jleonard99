import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Card } from 'react-native-elements';

import { globalStyles } from './GlobalStyles';

var database = [
{id:"0", name:"John Leonard",image:require("../assets/cartoonish.jpg"),notes:"A brief bio of Dr. Leonard!"},
{id:"1", name:"Mr. Krabs",image:require("../assets/mr-krabs.png"), notes:"He makes the best Krabby Patties!"},
{id:"2", name:"Spongebob Squarepants",image:require("../assets/spongebob-squarepants.png")},
{id:"3", name:"Patrick Star",image:require("../assets/patrick-star.png")},
{id:"4", name:"Sandy Cheeks",image:require("../assets/sandy-cheeks.png")},
{id:"5", name:"Squidward Tentacles",image:require("../assets/squidward-tentacles.png")}
];

function MyButton( props ){
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



export function MyScreen() {

    const [timesPressed, setTimesPressed ] = useState(0);
    const [ imageId, setImageId ] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [ guess, setGuess ] = useState( imageId );

    function DoMe( i ){

      setGuess( i );
      if (imageId==i){
        setModalVisible( false );

        setImageId( Math.floor(Math.random() * database.length ) );
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
                <MyButton onPressed={()=>DoMe( item.id )} key={item.id} name={item.name} id={item.id} />
                );
            })}
        </View>
      </View>
    );
  }

