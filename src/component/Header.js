import React, { Component } from 'react';
import {StyleSheet, View , Text} from 'react-native';

const Header = (props) => {
    return (
        <View style= {styles.viewStyle}>
            <Text>{props.headerText} Shows Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F8F8F8',
        paddingTop : 15 ,
        marginTop : 25,
        height: 60 ,
        elevation: 3,
        position: 'relative'
    }
})

export default Header ;
