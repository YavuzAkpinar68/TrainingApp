import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScrollView_container:{
    flex:1,
    paddingTop:10
  },
  imageView_container:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft:20,
    flex:1,
    backgroundColor:"white",
    paddingRight:20,
    alignItems:"center"
  },
  imageSettings_container:{
    height: Dimensions.get("screen").height/20,
    width: Dimensions.get("screen").width/10,
    rotation:270
    
  },
  imageAvatar_container:{
    height: Dimensions.get("screen").height/12,
    width: Dimensions.get("screen").width/6,
    borderRadius:360,

  },
  textView_container:{
    flex:5,
    backgroundColor:"white",
    
    borderRadius:15,
    paddingLeft:25,
    justifyContent:"space-between",
   
  },
  textTitle_container:{
    fontSize:25,
    fontWeight:"700",
  },
  textMiles_container:{
    fontSize:60,
    fontWeight:"bold",
    
    
  },
  textTime_container:{
    color:"silver",
    fontSize:20,
    fontWeight:"bold"
  },
  flatListView_container:{
    flex:9,
    paddingTop:10
  },
  flatList_container:{
    backgroundColor:"white",
  },
  cardView_container:{
    backgroundColor:"mistyrose",
    borderRadius:15,
    flex:1,
    marginRight:10,
    marginLeft:10,
    padding:10
  },
  cardImageView_container:{
    flex:2,
    backgroundColor:"mistyrose",
    borderRadius:15,
    margin:10,
    alignItems:"center",
    marginRight:10
    
  },
  cardImage_container:{
    borderRadius:30,
    width:Dimensions.get("screen").width/5,
    height:Dimensions.get("screen").height/10
  },
  cardTextView_container:{
    flex:3,
    backgroundColor:"mistyrose",
    alignItems:"center",
    height:140,
    width:210,
    justifyContent:"space-evenly"
    
  },
  cardTitleView_container:{
    alignItems:"center",
    backgroundColor:"mistyrose",

  },
  cardTitle_container:{
    fontSize:25,
    fontWeight:"bold"
    
  },
  cardLocation_container:{
    fontSize:15,
    color:"silver"
  },
  cardDistance_container:{
    fontSize: 15,
    color:"white",
    fontWeight:"bold"
  },
  cardDistanceView_container:{
    width:100,
    backgroundColor:"black",
    alignItems:"center",
    height:40,
    justifyContent:"center",
    borderRadius:10

  },
  lastTrip_container:{
    fontSize:25,
    fontWeight:"bold",
    paddingTop:10,
  }

  

})

export default styles