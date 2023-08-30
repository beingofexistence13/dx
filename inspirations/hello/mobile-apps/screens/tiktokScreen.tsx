// Imports
import React, {
    useState
} from "react";
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
    State,
    TapGestureHandler,

} from 'react-native-gesture-handler';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    Pressable,
    FlatList,
    SafeAreaView,
    Dimensions,
    useWindowDimensions,
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
import {
    Video,
    AVPlaybackStatus,
    Audio
} from 'expo-av';
import {
    WithSkiaWeb
} from '@shopify/react-native-skia/lib/module/web';
import {
    Platform
} from 'react-native';
import {
    TopBar,
    BottomBar,
    Telepot,
    GameSpace_BottomBar
} from "../components";
import faker from 'faker';
const {height,width}=Dimensions.get("screen");


// Variables
const SPACING = 20;
const AVATAR_SIZE = 70;
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/";
const HardCodedHeight = 600;
let zero=0;
let ITEM_HEIGHT=height* .90;

// FakeData
faker.seed(10);
const data = [...Array(5).keys()].map((_, i) => {
    return {
        videoURI: `../screens/video_${zero + 1}.mp4`,
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});


// Main Functionality
export default function TikTokScreen({ navigation, route}) {
    
    // useRef & UseState
    const flatlist = React.useRef < FlatList > (null);
    const video = React.useRef(null);
    const [status,
        setStatus] = React.useState({});
    const [index,
        setIndex] = React.useState(0);
    const [tapX,
        setTapX] = React.useState(0);
    const [tapY,
        setTapY] = React.useState(0);
    const [scrollY,
        setScrollY] = React.useState(0);
    const [showFlatlistContainer,
        setShowFlatlistContainer] = React.useState("flex");
    const [showHeart,
        setShowHeart] = React.useState("none");
    const pager = React.useRef(new Animated.Value(0)).current;
    


    // useEffect
    React.useEffect(()=> {
        flatlist.current?.scrollToIndex({
            index,
            animated: true,
        });
    }, [index]);
    const hoverGestureEvent = useAnimatedGestureHandler ({
        onStart: (e) => {
           setTapX(e.x);
           setTapY(e.y);
        },
        onFinish: (e) => {
            
        },
    });
    // Double Tap plus Long press
    let doubleTapRef = React.createRef();
    let onHandlerStateChange = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            console.log(`Long Press!`);
        }
    };
    let onSingleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
        }
    };
    let onDoubleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            console.log(`Double Tap and x:${tapX} y:${tapY}`)
            setShowHeart("flex");
            setTimeout(()=>{
                
                console.log("SetTimeOut");
                setShowHeart("none");
                
            },1000);
        }
    };
    // PanGestureHandlerGestureEvent
    const panGestureEvent = useAnimatedGestureHandler ({
            onStart: (event, context) => {
                console.log("Start")
                
            },
            onActive: (event, context) => {
                
                console.log(event.translationY);
                setScrollY(event.transparent);
                
            },
            onEnd: () => {
                console.log("End")
                
            },
    });
    const heartAnimatedStyle = useAnimatedStyle(() => {
        return {
            display:showHeart,
            left:tapX,
            top:tapY,
            
        };
    });
// Sounds
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/Hello.mp3')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
    return (
        <View style={styles.container}>
            <View style={styles.BOTTOMBAR_CONTAINER_LINE}></View>
          {/* <Text>TikTok Clone for Shohan</Text> */}
            <FlatList
            ref={flatlist}
            initialScrollIndex={index}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            onScroll={(e)=> {
                const scrollOffset = e.nativeEvent.contentOffset.y;
                console.log(scrollOffset);
            }}
            style={styles.flatlist}
            data={data}
            keyExtractor={item=>item.key}
            renderItem={({
                item, index: flIndex
            })=> {
                return <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <LongPressGestureHandler
                        onHandlerStateChange={onHandlerStateChange}
                        minDurationMs={1200}>
                        <TapGestureHandler
                          onHandlerStateChange={onSingleTap}
                          waitFor={doubleTapRef}>
                          <TapGestureHandler
                            ref={doubleTapRef}
                            onGestureEvent={hoverGestureEvent}
                            onHandlerStateChange={onDoubleTap}
                            numberOfTaps={2}>
                   
                    <Animated.View style={[styles.flatlist_container, { backgroundColor: flIndex === index ? "black": "black" }]}>
                         <Animated.View style={[heartAnimatedStyle,styles.heartContainer]}>
                           <Image 
                                
                                style={[styles.heart]}
                                source={require("../assets/logo.jpg")}
                                
                            />    
                       </Animated.View>
                        {/*
                        <View style={[styles.text_container, styles.secondStyle, { backgroundColor: flIndex === index ? "#151414": "#151414" }]}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                        source={ {
                            uri: 'https://cdn.jsdelivr.net/gh/Man-from-earth25/hello-app/screens/fast_cleaning.mp4',
                        }}
                        <Video
                        ref={video}
                        style={styles.video}
                        source={require("../screens/video.mp4")}
                        resizeMode="cover"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Button title="Play Sound" onPress={playSound} />                        
                        */}
                        
                        <View style={[styles.tiktok_detail, { backgroundColor: "transparent"}]}>
                            <TouchableOpacity style={[styles.ad_detail_container]}>
                                <Text style={[styles.textColor,styles.ad_detail]}>Capcut </Text>
                                <Text style={[styles.textColor,styles.ad_detail]}>KineMaster </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.title_detail_container]}>
                                <Text style={[styles.textColor,styles.title_detail]}>First TikTok...</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tag_detail_container]}>
                                <Text style={[styles.textColor]}>#tiktok</Text>
                                <Text style={[styles.textColor]}>#shohan</Text>
                                <Text style={[styles.textColor]}>#emon</Text>
                                <Text style={[styles.textColor]}>#sumon</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.specialMentionTag_detail_container]}>
                                <Text style={[styles.textColor]}>#earth</Text>
                                <Text style={[styles.textColor]}>#nevergiveup</Text>
                                <Text style={[styles.textColor]}>#getup&moveup</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.originalSound_container]}>
                                <Text style={[styles.textColor]}>🎶 Original Sound - Tera Fitoor!!!</Text>
                            </TouchableOpacity>
                        
                        </View>
                        <View style={[styles.tiktok_action, { backgroundColor: "transparent"}]}>
                            
                            
                            <TouchableOpacity style={[styles.follow_action]}>
                                
                                <Image 
                                      
                                      style={[styles.channelLogo]}
                                      source={require("../assets/multiverse.png")}
                                      
                                />    
                                
                                <View style={[styles.follow_button]}>
                                    <Ionicons name="add-outline" size={10} color="#fff" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.love_action,styles.action_container_center]}>
                            
                                <View style={[styles.action_icon]}>
                                    
                                    <AntDesign name="hearto" size={24} color="#fff" />
                                    
                                 </View>
                              
                                <Text style={[styles.action_title]}>123.5k</Text>
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.blockhain_action,styles.action_container_center]}>
                                <View style={[styles.action_icon]}>
                                    
                                    <MaterialCommunityIcons name="webpack" size={35} color="#fff" />
                                    
                                 </View>
                                <Text style={[styles.action_title]}>0.005Eth</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.explore_action,styles.action_container_center]}>
                                <View style={[styles.action_icon]}>
                                    
                                    <MaterialCommunityIcons name="hololens" size={35} color="#fff" />
                                    
                                 </View>
                                <Text style={[styles.action_title]}>Explorer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.share_action,styles.action_container_center]}>
                                <View style={[styles.action_icon]}>
                                    
                                    <Ionicons name="share-social-outline" size={35} color="#fff" />
                                    
                                    
                                 </View>
                                <Text style={[styles.action_title]}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.opensourcemusic_action]}>
                                
                                
                                <Ionicons name="musical-notes-outline" size={10} color="#fff" />
                                
                            </TouchableOpacity>
                         
                            
                        </View>
                        
                        
                    </Animated.View>
                    </TapGestureHandler>
                    </TapGestureHandler>
                    </LongPressGestureHandler>
                    </PanGestureHandler>
            }}>
            </FlatList>
            <View style={[styles.flatlist_controller_container, { display: showFlatlistContainer,backgroundColor:"#151414" }]}>
                <View style={styles.fl_scroollPosition_container}>
                  <Text style={styles.fl_scroollPosition}>ScrollY Index:{index + 1}</Text>
                </View>
               <TouchableOpacity style={styles.flatlist_controller}
                onPress={()=> {
                    
                    if (index === data.length - 1) return;
                    setIndex(index + 1);
                   // setScrollY(100);
                   
                    console.log(index);
                    playSound;
                    
                    
                }}>
                    <AntDesign name="arrowdown" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> {

                  if (index === 0) return;
                  setIndex(index - 1);
                  //flatlist.scrollTo=({ x: 0, y: 100, animated: true });
                  
                    console.log(index);
                    playSound;
                    
                }}
                style={styles.flatlist_controller}>
                    <AntDesign name="arrowup" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> {
                    
                    setShowFlatlistContainer("none")
                    console.log(index);
                    playSound;
                    
                }}
                style={[styles.flatlist_controller]}>
                    <Ionicons name="close-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <GameSpace_BottomBar
            navigationProp={ navigation }
            routeProp={ route }
            BOTTOMBAR_BACKGROUND_PROP={"#000"}
            BOTTOMBAR_LINE_BACKGROUND_PROP={"#303030"}
            TEXT_COLOR_PROP={"#fff"}
            ICON_COLOR="#fff"
            />
        </View>
    );
};


// Styles
const styles = StyleSheet.create({
        heartContainer:{
            
            borderRadius:"50%",
            alignItems:"center",
            justifyContent:"center",
            
            position: "absolute",
            top:"50%",
            left:"50%",
            transform:([
              {translateX:"-50%"},
              {translateY:"-50%"},
            ]),
            
            zIndex:50000,
            
        },
        heart:{
            
            borderRadius:"50%",
            
            height:35,
            width:35,
           
        },
        tiktok_detail:{
            
            flexDirection:"column",
            rowGap:5,
            
            position:"absolute",
            left:10,
            bottom:70,
            
            width:window.innerWidth - 100,
        },
        title_detail:{
            
            alignItems:"center",
            justifyContent:"center",
            fontSize:20,
            fontWeight:900,
            fontStyle:"bold",
        },
        ad_detail:{
            
            borderWidth:1,
            borderColor:"#fff",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:7.5,
            
            padding:5,
            
           
        },
        ad_detail_container:{
            
            alignItems:"center",
            flexDirection:"row",
            columnGap:5,
            
        },
        tag_detail_container:{
            
            alignItems:"center",
            flexDirection:"row",
            columnGap:5,
            
        },
        specialMentionTag_detail_container:{
            
            alignItems:"center",
            flexDirection:"row",
            columnGap:5,
            
            
        },
        tiktok_action:{
          
            borderRadius:10,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            rowGap:17,
            
            position:"absolute",
            right:7,
            bottom:50,
            
            paddingLeft:7.5,
            paddingRight:3,
            paddingTop:15,
            paddingBottom:15,
            
            
            width:65,
            
        },
        follow_action:{
            
            borderRadius:"50%",
            borderWidth:1.5,
            borderColor:"#fff",
            alignItems:"center",
            justifyContent:"center",
            
            padding:1,
            
            height:45,
            width:45,
        },
        channelLogo:{
            
            borderRadius:"50%",
            
            height:"100%",
            width:"100%",
        },
        follow_button:{
            
            backgroundColor:"red",
            borderRadius:"50%",
            alignItems:"center",
            justifyContent:"center",
            
            position: "absolute",
            top:"100%",
            left:"50%",
            transform:([
              {translateX:"-50%"},
              {translateY:"-50%"},
            ]),
          
            height:18,
            width:18,
            
            
        },
        opensourcemusic_action:{
            
            backgroundColor:"#222222",
            borderRadius:"50%",
            alignItems:"center",
            justifyContent:"center",
            
            height:45,
            width:45,
            
        },
        action_container_center:{
            
            alignItems:"center",
            justifyContent:"center",
            
            flexDirection:"column",
            
            
        },
        action_icon:{
            
            alignItems:"center",
            justifyContent:"center",
            
            flex:1,
            
        },
        action_title:{
            
            color:"#fff",
            fontSize:13,
            fontStyle:"bold",
            fontWeight:900,
            
        },
        text: {
            
            color: "white",
            fontSize: 15,
            fontStyle: "bold",

        },
        textColor:{
            color: "white",
            
        },   
        text_container: {

            backgroundColor: "#0f0f0f",
            alignItems: "center",
            justifyContent: "center",

            height: 30,
            width: "100%",

            zIndex: 5,
        },
        video: {

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: ([{
                translateX: "-50%"
            },
                {
                    translateY: "-50%"
                },
            ]),

            height: "100%",
            width: window.innerWidth,

        },
        flatlist: {

            backgroundColor: "#000",

            marginBottom: 50,

            width: "100%",
            height: "100%",

        },
        flatlist_container: {

            backgroundColor: "#000",

            width: "100%",
            height: window.innerHeight,

        },
        flatlist_controller_container: {
            
            backgroundColor: "#060019",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            columnGap:5,
            
            position: "absolute",
            bottom: 50,
            left: 0,

            paddingLeft:10,
            paddingRight:10,

            width: "100%",
            height: 57,

        },
        flatlist_controller: {

            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ffffff",
            borderWidth: 1,
            borderRadius: "50%",

            width: 35,
            height: 35,

        },
        fl_scroollPosition_container: {

            color: "white",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ffffff",
            borderWidth: 1,
            borderRadius: 7.5,
            flex: 1,

            height: 35,

        },
        fl_scroollPosition: {

            color: "white",

        },




        BOTTOMBAR_CONTAINER_LINE: {
            display:"none",
            backgroundColor: "#4c4c4c",

            position: "absolute",
            bottom: 50,
            left: 0,

            width: "100%",
            height:0,

            zIndex: 500,
        },

        container: {

            flex: 1,
            justifyContent: 'center',
        },
        fl: {
            width: "100%",
            height: "100%",
        },
        item: {

            marginTop: TopBar.currentHeight || 50,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",

            height: "150%",
            width: "100%",
        },
        title: {

            width: "100%",
            height: "100%",
        },
        scrollContainer: {

            height: `100%`,
            width: "100%",

            marginBottom: 40,
        },
        videoContainer: {

            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",

            height: "100%",
            width: "100%",
        },
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