// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button,Pressable } from 'react-native';
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


export default function Drawer( props ) {



    return (
        <View style={styles.HELLO_BOTTOMSHEET_CONTAINER}>
            
            <Pressable style={[ styles.HELLO_BOTTOMSHEET_MOVER ]}/>
            <Text>
                bottomsheet Items
            </Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
  HELLO_BOTTOMSHEET_CONTAINER:{
    
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:"#E5E5E5",
    alignItem:"center",
    justifyContent:"center",
    
    position:"relative",
    bottom:0,
    left:0,
    
    
    height:"60%",
    width:"100%",
    zIndex:10000,
  },
    HELLO_BOTTOMSHEET_MOVER:{
      
        backgroundColor:"#F6F6F6",
        borderRadius:16,
        
        position:"absolute",
        bottom:-10,
        left:"50%",
        transform:([
          {translateX:"-50%"},
          {translateY:"-50%"},
          ]),
        
        height:5,
        width:30,
        
        
    },
  
  
});

  
