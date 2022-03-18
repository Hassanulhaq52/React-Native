import React from "react";


import {

    Pressable,
    StyleSheet,
    Text,
    View,

  
  } from 'react-native';

const Header = (props) => {

    return(

    <View  style = {styles.view}
    
    
    >

    <Text style = {styles.text}>

    React Native Tutorial

    </Text>

    </View>    
       
    )

}


const styles = StyleSheet.create({

view: {

    width: '100%',
    height: 50,
    backgroundColor: '#1171bf',
    alignItems: "center",
    justifyContent: "center",
    margin: 20
},

text: {

fontSize: 25,
color: 'white',
fontWeight: "bold"


}

})

export default Header;