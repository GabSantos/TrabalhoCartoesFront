import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

const Flex = (props) => {
    return (
        <View  style={styles.FlexV1}>
            <Quadrado size={0.2} cor='#7fffd4'/>
            <Quadrado size={0.4} cor='#ff801a'/>
            <Quadrado size={0.6} cor='#50d1f6'/>
            <Quadrado size={0.8} cor='#dd22c1'/>
            <Quadrado size={1} cor='#8312ed'/>
        </View>
    );
}
export default Flex

const styles = StyleSheet.create({
    FlexV1:{
        // flexGrow:1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 300,
        width: 300,
        
    }
})
