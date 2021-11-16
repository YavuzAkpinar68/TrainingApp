import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./style";


type CardProps = {
  title:string
  location:string
  distance:number
  image:string
}


const Card = (props:CardProps) => {
 
  return (
  <View style={styles.cardView_container}>
    <View style={styles.cardImageView_container}>
      <Image 
        style={styles.cardImage_container}
        source={{uri:props.image}}></Image>
    </View>
    <View style={styles.cardTextView_container}>
      <View style={styles.cardTitleView_container}>
        <Text
          numberOfLines={1} 
          style={styles.cardTitle_container}>
            {props.title}</Text>
        <Text style={styles.cardLocation_container}>{props.location}</Text>
      </View>
      <View style={styles.cardDistanceView_container}>
        <Text style={styles.cardDistance_container}>{props.distance}  Miles</Text>
      </View>
    </View>
  </View>
)}

export default Card