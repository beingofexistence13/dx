// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot,LiveSpace_BottomBar } from "../../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';






// Main Functionality 
export default function LiveeventScreen({ navigation,route }) {
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Text>{ route.name }</Text>
            <Telepot navigationProp={navigation} />
            
            

            <LiveSpace_BottomBar
              navigationProp={ navigation } 
              routeProp={ route } 
            />
            
        </View>
    );
}





// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        position: "relative",
        
        height: "100%",
        width: "100%",
    },



});
