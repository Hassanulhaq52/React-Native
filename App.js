
import React, { useState } from 'react';
import { Node } from 'react';
import {

  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  hitSlop

} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import SectionList from 'react-native/Libraries/Lists/SectionList';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {

    SetSubmitted(!submitted);

  }

  return (

    <View style={styles.body}>

      <Text style={styles.text}>
        Plz Write Your Full Name:
      </Text>

      <TextInput

        style={styles.input}
        placeholder='e.g John Smith'
        onChangeText={(value) => SetName(value)}

      />

      {/* <Button

        title={submitted ? 'clear' : 'Submit'}
        onPress={onPressHandler}
        

      /> */}

      {/* <TouchableWithoutFeedback

        style={styles.button}
        onPress={onPressHandler}

      >

        <View style = {styles.button}>

          <Text style={styles.text}>

            {submitted ? 'clear' : 'Submit'}

          </Text>

        </View>


      </TouchableWithoutFeedback> */}

      <Pressable
      
      onPress = {onPressHandler}
      hitSlop = {{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple = {{color:'#00f'}}
      style = {({pressed}) =>  [
        {backgroundColor: pressed ? '#d9b793' : '#71d6eb'},
        styles.button]}

      >

        <Text style={styles.text}>

          {submitted ? 'clear' : 'Submit'}

        </Text>

      </Pressable>

      {submitted ?
        <Text style={styles.text}>
          You Are Registered As {name}
        </Text>

        :
        null
      }

    </View>

  );

};


const styles = StyleSheet.create({

  body: {

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'

  },


  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },

  input: {

    borderWidth: 1,
    width: 300,
    height: 100,
    borderColor: 'blue',
    borderRadius: 50,
    fontSize: 23,
    textAlign: 'center',
    margin: 10

  },

  button: {

    height: 50,
    width: 150,
    alignItems: 'center',

  }

});

export default App;
