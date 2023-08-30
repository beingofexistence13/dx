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




function GameSpace_BottomBar(props) {
    let navigationFirstProp = props.navigationProp;
    let routeFirstProp = props.routeProp;
    let BOTTOMBAR_BACKGROUND = props.BOTTOMBAR_BACKGROUND_PROP;
    let BOTTOMBAR_LINE_BACKGROUND = props.BOTTOMBAR_LINE_BACKGROUND_PROP;
    let TEXT_COLOR = props.TEXT_COLOR_PROP;


    return (
        <BottomBar 
            
            BOTTOMTABITEM_ONE_TELEPOT="Esport" 
            BOTTOMTABITEM_ONE_TEXT="Esport" 
            BOTTOMTABITEM_ONE_ICON={
                <MaterialIcons name="sports-esports" size={20} color={props.ICON_COLOR || "#000"} />
            }
            
            BOTTOMTABITEM_TWO_TELEPOT = "Gamee"
            BOTTOMTABITEM_TWO_TEXT = "Gamee"
            BOTTOMTABITEM_TWO_ICON = {
                <FontAwesome5 name="fantasy-flight-games" size={20} color={props.ICON_COLOR || "#000"} />
            }
            
            BOTTOMTABITEM_THREE_TELEPOT = "Gamestream"
            BOTTOMTABITEM_THREE_ICON = { 
                <Fontisto name="livestream" size={20} color={props.ICON_COLOR || "#000"} />
            }
            
            BOTTOMTABITEM_FOUR_TELEPOT = "Gamefi"
            BOTTOMTABITEM_FOUR_TEXT = "Gamefi"
            BOTTOMTABITEM_FOUR_ICON = { 
                <FontAwesome5 name="dharmachakra" size={20} color={props.ICON_COLOR || "#000"} />
            }
            
            BOTTOMTABITEM_FIVE_TELEPOT = "Reward"
            BOTTOMTABITEM_FIVE_TEXT = "Reward"
            BOTTOMTABITEM_FIVE_ICON = { 
                <AntDesign name="gift" size={20} color={props.ICON_COLOR || "#000"} />
            }
            
            navigationSecondProp = { navigationFirstProp }
            routeSecondProp = { routeFirstProp }
            
            BOTTOMBAR_BACKGROUND={BOTTOMBAR_BACKGROUND}
            BOTTOMBAR_LINE_BACKGROUND={BOTTOMBAR_LINE_BACKGROUND}
            TITLE_COLOR={TEXT_COLOR}
            
        />
    );
}


export default GameSpace_BottomBar;
