/*
* Created by 马燕 on 2019/03/25.
* */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state({

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Image source={require('../../../../images/Microphone.png')} />
                    <View style={styles.searchBox}>
                        <Image source={require('../../../../images/search.png')}/>
                    </View>
                    <Image source={require('../../../../images/setUp.png')}/>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
    },
    containerTop:{

    }
});



