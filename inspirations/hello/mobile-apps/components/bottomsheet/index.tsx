// Imports
import React, {
    useState
} from "react";
import {
    StatusBar
} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Pressable
} from 'react-native';
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
    PanGestureHandlerGesturee,
    LongPressGestureHandler,
    State,
    TapGestureHandler,

} from 'react-native-gesture-handler';


// BottomSheet will be recontinued after Expo Redux-Toolkit Implimentation
export default function BottomSheet(props) {

    // Variables and Typescript Types
    const SIZE = 100.0;
    const LIMIT = SIZE * 2;


    const [showBottomSheet,
        setShowBottomSheet] = useState(true);
    // Sahred Values
    const translateY = useSharedValue(300);


    // PanGestureHandler
    // Pangesture e
    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (e, c) => {
            c.translateY = translateY.value;

        },
        onActive: (e, c) => {
            translateY.value = e.translationY + c.translateY;
            console.log(`X is ${e.x}`);
            console.log(`Y is ${e.y}`);
        },
        onEnd: () => {
            const distance = Math.sqrt(translateY.value ** 2);

            if (distance < LIMIT + SIZE / 2) {
                translateY.value = withSpring(0);
            }

        },
    });

    // Animated Styles
    const animatedSheetStyle = useAnimatedStyle(() => {
        return {

            transform: [{
                translateY: translateY.value,
            },],


        };
    });
    return (



        <View style={styles.BOTTOMSHEET_CONTAINER_PRIME}>
            {
            showBottomSheet ? <View style={styles.HELLO_BOTTOMSHEET_CONTAINER}>
              <TouchableOpacity onPress={ ()=> {

                setShowBottomSheet(!showBottomSheet);
            } }
                style={[styles.HELLO_BOTTOMSHEET_OPACITY]} />
           <PanGestureHandler onGestureEvent={panGestureEvent}>
              <Animated.View style={[styles.HELLO_BOTTOMSHEET,
                    animatedSheetStyle]}>
                <Pressable style={[styles.HELLO_BOTTOMSHEET_MOVER]} />
                  <Text>
                      BottomSheet Items 1
                  </Text>
                  <Text>
                      BottomSheet Items 2
                  </Text>
                  <Text>
                      BottomSheet Items 3
                  </Text>
              </Animated.View>
         </PanGestureHandler>
            </View>: <Text>False</Text>

            }
     </View>





    );
    console.log(showBottomSheet);
}
const styles = StyleSheet.create({

        BOTTOMSHEET_CONTAINER_PRIME: {

            overflow: "hidden",
            alignItem: "center",
            justifyContent: "center",

            position: "absolute",
            bottom: 0,
            left: 0,


            height: "100%",
            width: "100%",
            zIndex: 1000,

        },
        HELLO_BOTTOMSHEET_MAIN: {

            alignItem: "center",
            justifyContent: "center",

            height: "10%",
            width: "100%",
        },
        HELLO_BOTTOMSHEET: {

            backgroundColor: "#fff",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,

            position: "absolute",
            bottom: 0,
            left: 0,

            paddingTop: 16,
            paddingLeft: 16,


            height: "100%",
            width: "100%",
        },
        HELLO_BOTTOMSHEET_OPACITY: {

            opacity: 0.3,
            backgroundColor: "#000",

            position: "absolute",
            top: 0,
            left: 0,


            height: "100%",
            width: "100%",

        },

        HELLO_BOTTOMSHEET_CONTAINER: {

            overflow: "hidden",
            alignItem: "center",
            justifyContent: "center",

            position: "absolute",
            bottom: 0,
            left: 0,


            height: "100%",
            width: "100%",
            zIndex: 1000,
        },
        HELLO_BOTTOMSHEET_MOVER: {

            backgroundColor: "#F2F2F2",
            borderRadius: 16,

            position: "absolute",
            top: 10,
            left: "50%",
            transform: ([{
                translateX: "-50%"
            },
                {
                    translateY: "-50%"
                },
            ]),

            height: 5,
            width: 30,


        },


    });
    
