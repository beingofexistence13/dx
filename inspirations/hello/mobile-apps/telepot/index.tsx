// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedScreen, AddScreen, FriendScreen, FollowerScreen, LibraryScreen } from "../screens/spaces/homeSpace";
import { CouchingScreen, EbookScreen, EducationScreen, SkillScreen, VisualScreen } from "../screens/spaces/studySpace";
import { ExploreScreen, FreeScreen, LocalScreen, MusicScreen, ShareScreen } from "../screens/spaces/mySpace";
import { ConnectScreen, LiveeventScreen, LivestreamScreen, PkstreamScreen, Talk2strangerScreen } from "../screens/spaces/liveSpace";
import { EsportScreen, GameeScreen, GamefiScreen, GamestreamScreen, RewardScreen } from "../screens/spaces/gameSpace";
import { CollabScreen, ManagementScreen, MeetingScreen, PresentationScreen, TaskScreen } from "../screens/spaces/workSpace";
import { ManFromEarthScreen,MultiverseScreen,TikTokScreen, SearchScreen, ProfileScreen, SidebarScreen } from "../screens";
import { Telepot } from "../components";

// Variables 
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ShortStack = createNativeStackNavigator();
const GameStack = createNativeStackNavigator();
const LiveStack = createNativeStackNavigator();
const MyStack = createNativeStackNavigator();
const WorkStack = createNativeStackNavigator();
const StudyStack = createNativeStackNavigator();

// Spaces
function HomeSpace() {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            
            <HomeStack.Screen name="Feed" component={FeedScreen} />
            <HomeStack.Screen name="Add" component={AddScreen} />
            <HomeStack.Screen name="Friend" component={FriendScreen} />
            <HomeStack.Screen name="Follower" component={FollowerScreen} />
            <HomeStack.Screen name="Library" component={LibraryScreen} />
            
            
        </HomeStack.Navigator>
    );
}

function StudySpace() {
    return (
        <StudyStack.Navigator screenOptions={{headerShown: false}}>
            
            <StudyStack.Screen name="Couching" component={CouchingScreen} />
            <StudyStack.Screen name="Ebook" component={EbookScreen} />
            <StudyStack.Screen name="Education" component={EducationScreen} />
            <StudyStack.Screen name="Visual" component={VisualScreen} />
            <StudyStack.Screen name="Skill" component={SkillScreen} />
            
            
        </StudyStack.Navigator>
    );
}

function MySpace() {
    return (
        <MyStack.Navigator screenOptions={{headerShown: false}}>
            
            <MyStack.Screen name="Local" component={LocalScreen} />
            <MyStack.Screen name="Music" component={MusicScreen} />
            <MyStack.Screen name="Share" component={ShareScreen} />
            <MyStack.Screen name="Free" component={FreeScreen} />
            <MyStack.Screen name="Explore" component={ExploreScreen} />
            
            
        </MyStack.Navigator>
    );
}

function LiveSpace() {
    return (
        <LiveStack.Navigator screenOptions={{headerShown: false}}>
            
            <LiveStack.Screen name="Connect" component={ConnectScreen} />
            <LiveStack.Screen name="Liveevent" component={LiveeventScreen} />
            <LiveStack.Screen name="Livestream" component={LivestreamScreen} />
            <LiveStack.Screen name="Talk2stranger" component={Talk2strangerScreen} />
            <LiveStack.Screen name="Pkstream" component={PkstreamScreen} />
            
            
        </LiveStack.Navigator>
    );
}

function GameSpace() {
    return (
        <GameStack.Navigator screenOptions={{headerShown: false}}>
            
            <GameStack.Screen name="Esport" component={EsportScreen} />
            <GameStack.Screen name="Gamee" component={GameeScreen} />
            <GameStack.Screen name="Gamefi" component={GamefiScreen} />
            <GameStack.Screen name="Gamestream" component={GamestreamScreen} />
            <GameStack.Screen name="Reward" component={RewardScreen} />
            
            
        </GameStack.Navigator>
    );
}

function WorkSpace() {
    return (
        <WorkStack.Navigator screenOptions={{headerShown: false}}>
            
            <WorkStack.Screen name="Collab" component={CollabScreen} />
            <WorkStack.Screen name="Management" component={ManagementScreen} />
            <WorkStack.Screen name="Meeting" component={MeetingScreen} />
            <WorkStack.Screen name="Presentation" component={PresentationScreen} />
            <WorkStack.Screen name="Task" component={TaskScreen} />
            
            
        </WorkStack.Navigator>
    );
}


// Temporary 
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
       <Telepot navigationProp={navigation} />
      
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
    );
}

function DetailsScreen({ route, navigation }) {


    console.log(route.params);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
       <Telepot navigationProp={navigation} />
            
      <Text>itemId:{route.params.itemId}</Text>
      <Text>otherParam:{route.params.otherParam}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
}



// Main Functionality 
export default function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen name="ManFromEarthScreen" component={ManFromEarthScreen} />
                <Stack.Screen name="HomeSpace" component={HomeSpace} />
                <Stack.Screen name="TikTok" component={TikTokScreen} />
                <Stack.Screen name="StudySpace" component={StudySpace}  />
                <Stack.Screen name="WorkSpace" component={WorkSpace}  />
                <Stack.Screen name="GameSpace" component={GameSpace}  />
                <Stack.Screen name="MySpace" component={MySpace} />
                <Stack.Screen name="LiveSpace" component={LiveSpace}  />
               
                
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Sidebar" component={SidebarScreen} />
                <Stack.Screen name="Multiverse" component={MultiverseScreen} />
                
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: true}}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: true}} />
                
                
            </Stack.Navigator>
        </NavigationContainer>
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
