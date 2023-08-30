// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot,HomeSpace_BottomBar } from "../../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import type { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/counterSlice'





// Main Functionality 
export default function LibraryScreen({ navigation, route }) {
    
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
    
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            
            <Text>LibraryScreen {count}</Text>
            <Telepot navigationProp={navigation} />
            
                

            <HomeSpace_BottomBar 
                navigationProp={navigation} 
                routeProp={route}
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
