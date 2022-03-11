
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

} from 'react-native';

import SectionList from 'react-native/Libraries/Lists/SectionList';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

// import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const[name, SetName] = useState('');

  return (

    <View style={styles.body}>

      <Text style={styles.text}>
        Plz Write Your Full Name:
      </Text>

      <TextInput
      // multiline
        style={styles.input}
        placeholder = 'e.g John Smith'
        onChangeText={(value) => SetName(value)}
        // keyboardType ='phone-pad'
        // maxLength={3}
        // editable = {false}
        // secureTextEntry
      />

<Text style={styles.text}>
        Your Name is: {name}
      </Text>

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
    textAlign: 'center'
   
  }


});

export default App;
