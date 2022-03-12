
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
  hitSlop,
  Alert,
  ToastAndroid,
  Modal

} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import SectionList from 'react-native/Libraries/Lists/SectionList';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [name, SetName] = useState('');
  const [showWarning, SetshowWarning] = useState(false);
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {

    if (name.length > 3) {

      SetSubmitted(!submitted);

    }
    else {

      SetshowWarning(true);

    }
  }

  return (

    <View style={styles.body}>

      <Modal visible={showWarning}

        transparent

        onRequestClose={() =>

          SetshowWarning(false)

        }

        animationType = 'slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>

          <View style={styles.warning_modal}>

            <View style={styles.warning_title}>

              <Text style={styles.text}> WARNING!</Text>

            </View>

            <View style={styles.warning_body}>

              <Text style={styles.text}>

                The name must be longer than 3 characters

              </Text>


            </View>

            <Pressable onLongPress = {() => SetshowWarning(false) }
            style = {styles.warning_button}
            android_ripple={{ color: '#00f' }}
            >

<Text style={styles.text}> OK </Text>

</Pressable>

          </View>

        </View>


      </Modal>

      <Text style={styles.text}>
        Plz Write Your Full Name:
      </Text>

      <TextInput

        style={styles.input}
        placeholder='e.g John Smith'
        onChangeText={(value) => SetName(value)}

      />

      <Pressable

        onLongPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#d9b793' : '#71d6eb' },
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
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    

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
    justifyContent: 'center'


  },

  warning_modal: {

    height: 300,
    width: 300,
    backgroundColor: '#ffffff',
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 20
  },

  centered_view: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },

  warning_title: {

    height: 50,
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },

  warning_body: {

    height: 200,
    justifyContent: 'center',
    alignItems: 'center',


  },

  warning_button: {

    backgroundColor: '#00ff00',
    borderRadius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  }

});

export default App;
