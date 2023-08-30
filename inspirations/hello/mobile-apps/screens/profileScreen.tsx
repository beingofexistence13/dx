// Imports
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar, Telepot } from "../components";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    LongPressGestureHandler,
    ScrollView,
    State,
    TapGestureHandler,

} from 'react-native-gesture-handler';





// Main Functionality 
export default function ProfileScreen({ navigation, route }) {


    let hoverBackground = useSharedValue("yellow");
    let hoverOpacity = useSharedValue(1);
    let X = useSharedValue(50);
    let Y = useSharedValue(50);
    let widthAnimation = useSharedValue("25%");
    let heightAnimation = useSharedValue("25%");
    let scaleAnimation = useSharedValue(1);
    let displayAninmatiom = useSharedValue("flex");

    const hover = useAnimatedStyle(() => {
        return {
            background: hoverBackground.value,
            opacity: hoverOpacity.value,

        };
    });
    const tapPosition = useAnimatedStyle(() => {
        return {

            left: X.value || 0,
            top: Y.value || 0,
            height: heightAnimation.value || 0,
            width: widthAnimation.value || 0,
            transform: ([
                { translateX: "-50%" || 0 },
                { translateY: "-50%" || 0 },
                { scale: scaleAnimation.value || 0 },
          ]),
            opacity: displayAninmatiom.value || 0,

        };
    });



    const hoverGestureEvent = useAnimatedGestureHandler < PanGestureHandlerGestureEvent > ({
        onStart: (e) => {
            hoverBackground.value = "yellow";
            hoverOpacity.value = 1;

            X.value = e.x;
            Y.value = e.y;
            heightAnimation.value = "300%";
            widthAnimation.value = "300%";
            scaleAnimation.value = 0;
            scaleAnimation.value = withTiming(1, { duration: 650 });
            displayAninmatiom.value = '1';

        },
        onFinish: (e) => {
            displayAninmatiom.value = withTiming('0', { duration: 1750 });
        },
    });


    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Text>Hi</Text>
            <Telepot navigationProp={navigation} />
            <TapGestureHandler
             onGestureEvent={hoverGestureEvent}
            >         
                <Animated.View style={[styles.box,hover]}>
                   <Animated.View style={[styles.rippleStyle,tapPosition]}>
                   </Animated.View>
                      <Text style={[ styles.text ]}>ManFromEarth you should not give up!!!</Text>
                   
                </Animated.View>
            </TapGestureHandler>
           

            
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
    box: {
        overflow: "hidden",
        width: 300,
        height: 200,
        alignSelf: 'center',
        margin: 10,
    },
    rippleStyle: {

        backgroundColor: "red",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        top: 10,
        left: 10,

    },
    text: {

        zIndex: 10000,
    },

});
