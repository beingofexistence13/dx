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




function StudySpace_BottomBar(props) {
    let navigationFirstProp = props.navigationProp;
    let routeFirstProp = props.routeProp;

    return (
        <BottomBar 
            
            BOTTOMTABITEM_ONE_TELEPOT="Ebook" 
            BOTTOMTABITEM_ONE_TEXT="Ebook" 
            BOTTOMTABITEM_ONE_ICON={
                <AntDesign name="book" size={20} color="black" />
            }
            
            BOTTOMTABITEM_TWO_TELEPOT = "Education"
            BOTTOMTABITEM_TWO_TEXT = "Education"
            BOTTOMTABITEM_TWO_ICON = {
                <FontAwesome5 name="school" size={20} color="black" />
                
            }
            
            BOTTOMTABITEM_THREE_TELEPOT = "Visual"
            BOTTOMTABITEM_THREE_ICON = { 
                <Ionicons name="leaf-outline" size={20} color="black" />
            }
            
            BOTTOMTABITEM_FOUR_TELEPOT = "Skill"
            BOTTOMTABITEM_FOUR_TEXT = "Skill"
            BOTTOMTABITEM_FOUR_ICON = { 
                <FontAwesome5 name="disease" size={20} color="black" />
            }
            
            BOTTOMTABITEM_FIVE_TELEPOT = "Couching"
            BOTTOMTABITEM_FIVE_TEXT = "Couching"
            BOTTOMTABITEM_FIVE_ICON = { 
                <Ionicons name="school-outline" size={20} color="black" />
                
            }
            
            navigationSecondProp = { navigationFirstProp }
            routeSecondProp = { routeFirstProp }
        />
    );
}


export default StudySpace_BottomBar;
