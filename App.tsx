import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import styles from './components/style';
import data from "./components/data.json"
import Card from './components/card';
import Card2 from './components/card2';

const date = new Date().getDate()
const event =  new Date(Date.UTC(2021, 10, 8, 3, 0, 0));
const options = {  year: 'numeric', month: 'short', day: 'numeric' };
const time = event.toLocaleDateString('default', options)
export default function App1() {

  return (
    <SafeAreaView style={{flex:1,paddingTop:30}}>
      <ScrollView style={styles.ScrollView_container}> 
        <View style={styles.imageView_container}>
          <Image 
            style={styles.imageSettings_container}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITbjD9y9PeJABCDza6mCP9ILg2m91xKQdtg&usqp=CAU"}}></Image>
          <Image 
            style={styles.imageAvatar_container}
            source={{uri:"https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}}></Image>
        </View>
        <View style={styles.textView_container}>
          <Text style={styles.textTitle_container}>You Drove</Text>
          <Text style={styles.textMiles_container}>{Math.floor(Math.random() * 60 + 1)},471
            <Text style={{fontSize:25,fontWeight:"bold"}}>  miles</Text>
          </Text>
          <Text style={styles.textTime_container}>Last trip yesterday at :{date} PM</Text>
        </View>
        <View style={styles.flatListView_container}>
          <Text 
            style={{fontSize:25,padding:20,fontWeight:"bold"}}> For you</Text>
          <FlatList
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get("screen").scale}
            style={styles.flatList_container}
            contentContainerStyle={{
              paddingRight:10,
              paddingLeft:10,
              paddingTop:10
            }}
            data={data}
            horizontal={true}
            renderItem={({item}) => <Card
              title={item.title}
              image={item.image}
              location={item.location}
              distance={item.distance}></Card>}>
            </FlatList>
        </View>
          <View style={{paddingLeft:20,paddingTop:30,paddingBottom:20}}>
            <Text style={styles.lastTrip_container}>Last Trips</Text>
          </View>  
        <Card2
            title="Walk"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH71wpiizClXljd6KrGocuiMkO4ddt8OC4w&usqp=CAU"
            location="Ocean Parkway"
            distance={8}
            time={time}></Card2>
          <Card2
            title="Training"
            image="data:image/png;base64,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"
            location="Needle Park"
            distance={20}
            time={time}></Card2>
          <Card2
            title="Run"
            image="data:image/png;base64,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"
            location="Instagram"
            distance={1}
            time={time}></Card2>
          <Card2
            title="Surf"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPztiB7IlWohOb7BO5WVC1dL6wH4qcpkUXYA&usqp=CAU"
            location="Internet"
            distance={5}
            time={time}></Card2>
      </ScrollView>
    </SafeAreaView>
  );
}


