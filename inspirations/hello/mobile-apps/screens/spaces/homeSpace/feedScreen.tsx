// Imports
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot,HomeSpace_BottomBar,BottomSheet} from "../../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import type { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/counterSlice'
import { MotiView } from 'moti';

// Counter Component
export function Counter() {
    
    
  const counter = useSelector((state: RootState) => state.counter)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
      
      <View>
      
  
        <Button
          title ="Increment value"
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        
        <Text>Name is {counter.name}</Text>
        <Text>Email is {counter.email}</Text>
        <Text>{count}</Text>
        
        <Button
          title ="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </View>
        
  )
}





// FeedScreen
export default function FeedScreen({ navigation,route }) {
    const [ showBottomSheet,setShowBottomSheet ] = useState(true);
    
    
    console.log(navigation,route)
    
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Text>I figure out how to set params</Text>
            {/* <BottomSheet useStateResult={showBottomSheet} /> */}
            <Telepot navigationProp={navigation} />
            
            

            <HomeSpace_BottomBar
              navigationProp={ navigation } 
              routeProp={ route } 
            />

             <Counter />
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  >
  Hi
  </MotiView>

            
        </View>
    );
}
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
BottomBar_HomeSpace_Container:{
        backgroundColor: "red",
        
        position: "relative",
        top:"90%",
        left:0,
        
        width: "100%",
        
        
},


});
