import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card2view_container:{
    flex:2,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    paddingTop:15
  },
  card2titleView_container:{
    flexDirection:"row",
    flex:3
  },
  card2distanceView_container:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"flex-end"
  },
  card2ImageView_container:{
    flex:1
  },
  card2Image_container:{
    height:Dimensions.get("screen").height/14,
    width:Dimensions.get("screen").width/7,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15
  },
  card2locationView_container:{
    flex:2.5,
    paddingLeft:20,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  card2title_container:{
    fontSize:20,
    fontWeight:"bold"
  },
  card2location_container:{
    fontSize:17,
    color:"silver"
  },
  card2distance_container:{
    fontSize:20,
    fontWeight:"bold"
  },
  card2date_container:{
    fontSize:15,
    color:"silver"
  }
})

export default styles