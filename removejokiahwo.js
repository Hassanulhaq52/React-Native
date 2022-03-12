// import React, { useState } from 'react';
// import { Node } from 'react';
// import {

//   FlatList,
//   Linking,
//   RefreshControl,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,

// } from 'react-native';
// import SectionList from 'react-native/Libraries/Lists/SectionList';

// // import { Colors } from 'react-native/Libraries/NewAppScreen';

// const App = () => {

//   const [Items, setItems] = useState([

//     {  name: 'Item 1' },
//     {  name: 'Item 2' },
//     {  name: 'Item 3' },
//     {  name: 'Item 4' },
//     {  name: 'Item 5' },
//     {  name: 'Item 6' },
//     {  name: 'Item 7' },
//     {  name: 'Item 8' },
//     {  name: 'Item 9' },
//     {  name: 'Item 10' },

//   ]);


//   const DATA = [

// {
//   title: 'Name:',
//   data: ['Hassan Ul Haq'],
// },

// {
//   title: 'Father Name:',
//   data: ['Shams Ul Haq'],
// },

// {
//   title: 'Semester:',
//   data: ['6th'],
// },

// {
//   title: 'Interest',
//   data: ['Web and Mobile Application'],
// },

//   ]

//   const [Refreshing, setRefreshing] = useState(false)

//   const onRefresh = () => {
//     setRefreshing(false);
//     setItems([...Items, { name: 'Item 69' }]);

//   }

//   return (

//     <SectionList
    
//     sections = {DATA}
//          renderItem={({item}) => (

//           <Text style={styles.text}>{item}</Text>

//       )}

//       renderSectionHeader={({section}) => (

//         <View style={styles.item}>

//           <Text style={styles.text}>{section.title}</Text>

//         </View>

//       )}


//     />

// //     <FlatList
// //     // horizontal
// //     // inverted
// //     keyExtractor = {(item, index) => index.toString()}
// // //  numColumns = {2}
    
// //       data={Items}

// //       renderItem={({item}) => (

// //         <View style={styles.item}>

// //           <Text style={styles.text}>{item.name}</Text>

// //         </View>

// //       )}

// //       refreshControl={

// //             <RefreshControl

// //               refreshing={Refreshing}
// //               onRefresh={onRefresh }
// //               colors= {['#ff00ff']}
// //             />

// //           }

// //     />



//     //     <ScrollView

//     //       style={styles.body}

//     //     >

//     //       {
//     //         Items.map((object) => {

//     //           return (

//     //             <View style={styles.item} key={object.key}>

//     //               <Text style={styles.text}>{object.item}</Text>

//     //             </View>

//     //           )
//     //         })
//     //       }

//     //     </ScrollView>





//   );
// };



// const styles = StyleSheet.create({

//   body: {

//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#f5f6f7',

//   },

//   item: {
//     margin: 20,
//     backgroundColor: '#45ccde',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     color: '#000000',
//     fontSize: 50,
//     fontWeight: 'bold',
//     fontStyle: 'italic',

//   },

// });

// export default App;




















// // import React from 'react';
// // import { useState } from 'react';
// // import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


// //   const [Items, setItems] = useState([
// //   {

// //     title: 'Item 1',
// //   },
// //   {

// //     title: 'Item 2',
// //   },
// //   {

// //     title: 'Item 3',
// //   },

// //   {

// //     title: 'Item 4',
// //   },

// //   {

// //     title: 'Item 5',
// //   },

// //   {

// //     title: 'Item 6',
// //   },

// //   {

// //     title: 'Item 7',
// //   },

// //   {

// //     title: 'Item 8',
// //   },

// //   {

// //     title: 'Item 9',
// //   },

// //   {

// //     title: 'Item 10',
// //   },
// // ]);

// //   const [refreshing, setRefreshing] = useState(false)

// //   const onRefresh = () => {
// //     setRefreshing(false);
// //     setItems([Items, { key: 69, item: 'Item 69' }]);

// //   }

// // const Item = ({ title }) => (
// //   <View style={styles.item}>
// //     <Text style={styles.title}>{title}</Text>
// //   </View>
// // );

// // const App = () => {
// //   const renderItem = ({ item }) => (
// //     <Item title={item.title} />
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <FlatList
// //         data={DATA}
// //         renderItem={renderItem}
// //         keyExtractor={(item, index) => index.toString()}

// //         // RN OFFICIAL WEBSITE//
// //         // keyExtractor={item => item.key}

// //       />
// //     </SafeAreaView>
// //   );
// // }




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



//   Alert.alert('Warning', "The name must be longer than 3 characters. ",

    //     [

    //       {
    //         text: 'Do not Show This Again', onPress: () => console.warn('Do not Show This Again')
    //       },

    //       {
    //         text: 'Cancel', onPress: () => console.warn('Cancel')
    //       },

    //       {
    //         text: 'OK', onPress: () => console.warn('OK')
    //       }

    //     ],

    //     {
    //       cancelable: true, onDismiss: () => console.warn('Alert Dismissed')
    //     })

    

    // ToastAndroid.showWithGravityAndOffset(
    //   "The name must be longer than 3 characters. ",
    // ToastAndroid.LONG,
    // ToastAndroid.CENTER,
    // 0,
    // 50
     
    // )







// // const styles = StyleSheet.create({
// //   container: {

// //     flex: 1,
// //     flexDirection: 'column',
// //     backgroundColor: '#f5f6f7',

// //   },

// //   item: {
// //     backgroundColor: '#50cae6',
// //     padding: 20,
// //     marginVertical: 8,
// //     marginHorizontal: 16,
// //     alignItems: 'center'
// //   },
// //   title: {
// //     fontSize: 40,
// //     color: 'black',
// //     fontWeight: 'bold'
// //   },
// // });

// // export default App;