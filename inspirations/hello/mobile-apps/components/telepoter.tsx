// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';




// Main Functionality 
export default function Telepot(props) {
    return (
        <View style={styles.container}>
            
              <Button
                title="HomeSpace"
                onPress={() => props.navigationProp.navigate("HomeSpace",{ post:"Yes"})}
            
              />
              <Button
                title="MySpace"
                onPress={() => props.navigationProp.navigate('MySpace')}
              />
              <Button
                title="GameSpace"
                onPress={() => props.navigationProp.navigate('GameSpace')}
              />
              <Button
                title="WorkSpace"
                onPress={() => props.navigationProp.navigate('WorkSpace')}
              />
              <Button
                title="LiveSpace"
                onPress={() => props.navigationProp.navigate('LiveSpace')}
              />
              <Button
                title="StudySpace"
                onPress={() => props.navigationProp.navigate('StudySpace')}
              />
              {/* <Button
                title="VisualSpace"
                onPress={() => props.navigationProp.navigate('VisualSpace')}
              />          */}
        </View>
    );
}





// Styles
const styles = StyleSheet.create({
    container: {
          
    },



});
