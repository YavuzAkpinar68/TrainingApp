import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.Card2"


type Card2Props = {
  title:string
  image:string
  location:string
  distance: number
  time:any
}

const Card2 = (props:Card2Props) => {
  return(
    <View style={styles.card2view_container}>
      <View style={styles.card2titleView_container}>
        <View style={styles.card2ImageView_container}>
          <Image 
            source={{uri:props.image}}
            style={styles.card2Image_container}></Image>
        </View>
        <View style={styles.card2locationView_container}>
          <Text style={styles.card2title_container}>{props.title} </Text>
          <Text style={styles.card2location_container}>{props.location}</Text>
        </View>
      </View>
      <View style={styles.card2distanceView_container}>
        <Text style={styles.card2distance_container}>{props.distance} miles</Text>
        <Text style={styles.card2date_container}>at {props.time}</Text>
      </View>
    </View>
  )
}
export default Card2