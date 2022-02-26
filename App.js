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

} from 'react-native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [Items, setItems] = useState([

    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
    { key: '6', name: 'Item 6' },
    { key: '7', name: 'Item 7' },
    { key: '8', name: 'Item 8' },
    { key: '9', name: 'Item 9' },
    { key: '10', name: 'Item 10' },

  ]);

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(false);
    setItems([...Items, { key: 69, item: 'Item 69' }]);

  }

  return (

    <FlatList

      data={Items, setItems}

      renderItems={({item}) => (

        <View style={styles.item}>

          <Text style={styles.text}>{item.name}</Text>

        </View>

      )}
    />

    //     <ScrollView

    //       style={styles.body}

    //       refreshControl={

    //         <RefreshControl

    //           refreshing={refreshing}
    //           onRefresh={onRefresh }
    //           colors= {['#ff00ff']}
    //         />

    //       }
    //     >

    //       {
    //         Items.map((object) => {

    //           return (

    //             <View style={styles.item} key={object.key}>

    //               <Text style={styles.text}>{object.item}</Text>

    //             </View>

    //           )
    //         })
    //       }

    //     </ScrollView>

  );
};

const styles = StyleSheet.create({

  body: {

    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff00ff',

  },

  item: {
    margin: 30,
    backgroundColor: '#78c3de',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },

});

export default App;
