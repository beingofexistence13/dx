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




function WorkSpace_BottomBar(props) {
    let navigationFirstProp = props.navigationProp;
    let routeFirstProp = props.routeProp;

    return (
        <BottomBar 
            
            BOTTOMTABITEM_ONE_TELEPOT="Collab" 
            BOTTOMTABITEM_ONE_TEXT="Collab" 
            BOTTOMTABITEM_ONE_ICON={
                <FontAwesome name="group" size={20} color="black" />
            }
            
            BOTTOMTABITEM_TWO_TELEPOT = "Presentation"
            BOTTOMTABITEM_TWO_TEXT = "Presentation"
            BOTTOMTABITEM_TWO_ICON = {
                <MaterialCommunityIcons name="presentation" size={20} color="black" />
            }
            
            BOTTOMTABITEM_THREE_TELEPOT = "Meeting"
            BOTTOMTABITEM_THREE_ICON = { 
                
                <FontAwesome name="meetup" size={24} color="black" />
            }
            
            BOTTOMTABITEM_FOUR_TELEPOT = "Management"
            BOTTOMTABITEM_FOUR_TEXT = "Management"
            BOTTOMTABITEM_FOUR_ICON = { 
                <Feather name="git-commit" size={20} color="black" />
            }
            
            BOTTOMTABITEM_FIVE_TELEPOT = "Task"
            BOTTOMTABITEM_FIVE_TEXT = "Task"
            BOTTOMTABITEM_FIVE_ICON = { 
                
                <FontAwesome5 name="tasks" size={20} color="black" />
            }
            
            navigationSecondProp = { navigationFirstProp }
            routeSecondProp = { routeFirstProp }
        />
    );
}


export default WorkSpace_BottomBar;
