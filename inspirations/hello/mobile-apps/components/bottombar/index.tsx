// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button,Pressable } from 'react-native';
import { importedStyle } from "../../components";
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial

} from '@expo/vector-icons';

// Variables 
let HOVER_COLOR = 'red';


export default function BottomBar( props ) {


    const BOTTOM_ITEM_CLICK_FUNCTION = () => {
        alert("Bottom Item Clicked")
        let HOVER_COLOR = 'red';
        
    };
console.log(props.routeSecondProp);


    return (
        <View style={[ styles.BOTTOMBAR_CONTAINER,{ backgroundColor:props.BOTTOMBAR_BACKGROUND || "#fff"} ]}>
            <View style={[ styles.BOTTOMBAR_CONTAINER_LINE,{ backgroundColor:props.BOTTOMBAR_LINE_BACKGROUND || "#EAEAEA"} ]}></View>
        {/* Community Comment 
        <View style={styles.BOTTOMBAR_TOOL_CONTAINER}>
          
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
          <Text style={[ importedStyle.color ]}> 1 </Text>
        
        </View>
        */}
        
        <View style={styles.BOTTOMBAR_CONTAINER_SMALL}>
            
            <TouchableOpacity onPress={() => {   props.navigationSecondProp.navigate(props.BOTTOMTABITEM_ONE_TELEPOT)  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_ONE]}>
              
               {props.BOTTOMTABITEM_ONE_ICON}
                <Text style={[ styles.HOVER_TEXT,{color:props.TITLE_COLOR || "black"} ]}>{props.BOTTOMTABITEM_ONE_TEXT}</Text>
                
                
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {   props.navigationSecondProp.navigate(props.BOTTOMTABITEM_TWO_TELEPOT)  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_TWO]}>
                
                {props.BOTTOMTABITEM_TWO_ICON}        
                <Text style={[ styles.HOVER_TEXT,{color:props.TITLE_COLOR || "black"} ]}>{props.BOTTOMTABITEM_TWO_TEXT}</Text>
                
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {   props.navigationSecondProp.navigate(props.BOTTOMTABITEM_THREE_TELEPOT)  }}  style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_THREE]}>
                
                {props.BOTTOMTABITEM_THREE_ICON}        
             
                
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {   props.navigationSecondProp.navigate(props.BOTTOMTABITEM_FOUR_TELEPOT)  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_FOUR]}>
                
                {props.BOTTOMTABITEM_FOUR_ICON}        
                <Text style={[ styles.HOVER_TEXT,{color:props.TITLE_COLOR || "black"} ]}>{props.BOTTOMTABITEM_FOUR_TEXT}</Text>
                
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {   props.navigationSecondProp.navigate(props.BOTTOMTABITEM_FIVE_TELEPOT)  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_FIVE]}>
                
                {props.BOTTOMTABITEM_FIVE_ICON}        
                <Text style={[ styles.HOVER_TEXT,{color:props.TITLE_COLOR || "black"} ]}>{props.BOTTOMTABITEM_FIVE_TEXT}</Text>
                
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  
  BOTTOMBAR_TOOL_CONTAINER:{
        backgroundColor:"#fff",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity:  0.23,
      shadowRadius: 11.27,
      elevation: 0,
      borderRadius:23.5,
      alignItems:"center",
      justifyContent:"space-around",
    flexDirection:"row",
    columnGap:5,
  flex:1,
    
        position: "absolute",
        top:-30,
        left:"50%",
        transform:([
          {translateX:"-50%"},
          {translateY:"-50%"},
          ]),
 
    height:40,
    width:"80%",
    
    
    
    
  },
  
  BOTTOMBAR_CONTAINER_LINE:{
      
      position:"absolute",
      top:0,
      left:0,
      
      width:"100%",
      height:1,
  },
    BOTTOMBAR_CONTAINER: {
        position: "absolute",
        bottom: 0,
        left: 0,

        height: 50,
        width: "100%",

    },
    BOTTOMBAR_CONTAINER_SMALL: {
      
        overflow: "hidden",
        position: "relative",
        bottom:0,
        left:0,

        width: "100%",
        height: 50,

    },
    BOTTOMBAR_ITEM_CONTAINER: {

        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        top: "50%",
        transform: ([{ translateY: '-50%' }]),

        height: "100%",
        width: "20%",


    },
    HOVER_TEXT: {

        color: "#fff",

    },


    BOTTOM_ITEM_COUNT_ONE: {

        left: "0%",
    },
    BOTTOM_ITEM_COUNT_TWO: {

        left: "20%",
    },
    BOTTOM_ITEM_COUNT_THREE: {
        borderColor:"#EAEAEA",
        borderWidth:1,
        left: "50%",
        
        transform: ([{ translateX: '-50%' },{ translateY: '-50%' }]),
        
        height:40,
        width:40,
    },
    BOTTOM_ITEM_COUNT_FOUR: {

        left: "60%",
    },
    BOTTOM_ITEM_COUNT_FIVE: {

        left: "80%",
    },

});
