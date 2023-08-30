// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot } from "../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';




// Main Functionality 
export default function SearchScreen({ navigation,route }) {
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Text>Search</Text>
            <Telepot navigationProp={navigation} />
            
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
