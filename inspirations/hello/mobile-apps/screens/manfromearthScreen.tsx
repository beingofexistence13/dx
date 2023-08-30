// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import {useTailwind} from 'tailwind-rn';
import { TopBar,Telepot } from "../components";



// Main Functionality 
export default function SidebarScreen({ navigation, route }) {
	const tailwind = useTailwind();

    return (
        <View style={styles.container}>

            <Text>Developed by ManFromEarth & Made by your Love!!!</Text>
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Telepot navigationProp={navigation} />
            

        </View>
    );
}


// make a simple function




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
