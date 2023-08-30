// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TopBar, BottomBar } from "./components";
// import AppStack from './telepot/index.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import type { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
// import { TailwindProvider } from 'tailwindcss-react-native';
import { TailwindProvider } from 'tailwind-rn';
import AppStack from './telepot';




// Variables 
const Stack = createNativeStackNavigator();








// Main Functionality 
export default function App() {


    return (


        <Provider store={store}>
            {/* <TailwindProvider utilities={undefined}> */}
            <AppStack />
            {/* </TailwindProvider> */}
        </Provider>

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
    MULTIVERSE_BOTTOM_GLOW: {

        backgroundCoolor: "#fff",

        position: "absolute",
        bottom: 60,
        left: 0,


        height: 3,
        width: "100%",

        zIndex: 2,
    },

});