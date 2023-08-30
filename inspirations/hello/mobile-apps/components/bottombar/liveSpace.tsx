import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar, Telepot } from "../../components";
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




function LiveSpace_BottomBar(props) {
    let navigationFirstProp = props.navigationProp;
    let routeFirstProp = props.routeProp;

    return (
        <BottomBar 
            
            BOTTOMTABITEM_ONE_TELEPOT="Connect" 
            BOTTOMTABITEM_ONE_TEXT="Connect" 
            BOTTOMTABITEM_ONE_ICON={
                <FontAwesome5 name="connectdevelop" size={20} color="black" />
            }
            
            BOTTOMTABITEM_TWO_TELEPOT = "Liveevent"
            BOTTOMTABITEM_TWO_TEXT = "Liveevent"
            BOTTOMTABITEM_TWO_ICON = {
                <MaterialIcons name="event" size={20} color="black" />
            }
            
            BOTTOMTABITEM_THREE_TELEPOT = "Livestream"
            BOTTOMTABITEM_THREE_ICON = { 
                <MaterialCommunityIcons name="television-shimmer" size={20} color="black" />            
            }
            
            BOTTOMTABITEM_FOUR_TELEPOT = "Pkstream"
            BOTTOMTABITEM_FOUR_TEXT = "Pkstream"
            BOTTOMTABITEM_FOUR_ICON = { 
                <MaterialCommunityIcons name="boxing-glove" size={20} color="black" />
            }
            
            BOTTOMTABITEM_FIVE_TELEPOT = "Talk2stranger"
            BOTTOMTABITEM_FIVE_TEXT = "T2S"
            BOTTOMTABITEM_FIVE_ICON = { 
                <AntDesign name="aliwangwang-o1" size={20} color="black" />
            }
            
            navigationSecondProp = { navigationFirstProp }
            routeSecondProp = { routeFirstProp }
        />
    );
}


export default LiveSpace_BottomBar;
