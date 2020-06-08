import { StyleSheet } from "react-native"

export const roomCardStyles = StyleSheet.create({
  card:{
    width:200,
    height:200,
    borderRadius: 10,
    overflow: "hidden",
  },
  img:{width: 200, height: 140, position:'relative'},
  tip:{
    position:"absolute",
    top:10,
    left:10,
    backgroundColor:'rgba(0,0,0,0.5)',
    overflow: "hidden",
    color:'rgba(255,255,255,1)',
    flexDirection:"row",
    padding:6,
    borderRadius:15,
  },
  type:{
    backgroundColor:'rgba(255,0,0,0.5)',
    borderRadius: 10,
  },
  tipText:{
    lineHeight: 20,
    color:'rgb(255,255,255)',
    fontSize:14,
  },
  imgBottom:{
    position:'absolute',
    bottom:10,
    left:10,
    right:10,
    flexDirection:"row",
  },
  right:{
    lineHeight: 20,
    color:'rgb(255,255,255)',
    fontSize:14,
    // alignSelf:'flex-end',
    // alignItems:"center"
    position:"absolute",
    right:0,
  },
  imgRoomNum:{
    color:'rgb(255,0,0)',
    fontSize: 20,
    fontWeight: "bold",
  },
  cardInfo:{
    padding:6,
    backgroundColor:'rgb(255,255,255)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  cardInfoText:{
    fontSize:20,
  },
  
});