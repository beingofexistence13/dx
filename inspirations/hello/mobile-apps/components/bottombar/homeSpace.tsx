import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar, Telepot } from "../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';



// Variables 
let HOVER_COLOR = 'yellow';

function HomeSpace_BottomBar(props) {
  let navigationFirstProp = props.navigationProp;
  let routeFirstProp = props.routeProp;
  
    return (
        <BottomBar 
        ICON_PROVIDER="Ionicons"
        ICON_NAME="home"
            BOTTOMTABITEM_ONE_TELEPOT="Feed" 
            BOTTOMTABITEM_ONE_TEXT="Feed" 
            BOTTOMTABITEM_ONE_ICON={<Ionicons name="home" size={17} color="black" />}
            
            BOTTOMTABITEM_TWO_TELEPOT = "Friend"
            BOTTOMTABITEM_TWO_TEXT = "Friend"
            BOTTOMTABITEM_TWO_ICON = { <FontAwesome5 name="user-friends" size={17} color="black" /> }
            
            BOTTOMTABITEM_THREE_TELEPOT = "Add"
            BOTTOMTABITEM_THREE_ICON = { <AntDesign name="plus" size={20} color="black" /> }
            
            BOTTOMTABITEM_FOUR_TELEPOT = "Follower"
            BOTTOMTABITEM_FOUR_TEXT = "Follower"
            BOTTOMTABITEM_FOUR_ICON = { <FontAwesome name="address-book-o" size={17} color="black" /> }
            
            BOTTOMTABITEM_FIVE_TELEPOT = "Library"
            BOTTOMTABITEM_FIVE_TEXT = "Library"
            BOTTOMTABITEM_FIVE_ICON = { <Ionicons name="library" size={17} color="black" /> }
            
            navigationSecondProp = { navigationFirstProp }
            routeSecondProp = { routeFirstProp }
        />
    );
}


export default HomeSpace_BottomBar;
