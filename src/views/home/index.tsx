import React from "react";
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
const img = require('../../assets/head.png')
export default function Home() {
    return (
        <View style={{ paddingTop: StatusBar.currentHeight, flex: 1, backgroundColor: '#FFF0F5' }}>
            <StatusBar barStyle={'dark-content'} />
            <View style={{ alignItems: 'center', backgroundColor: "#FFF0F5", flex: 1, paddingTop: 80 }}>
                <Image source={img} resizeMode='contain' style={{ height: '25%', width: '50%' }} />
            </View>
            <View style={{ alignItems: 'center', flex: 3 }}>
                <View style={{ height: '30%', width: "50%", backgroundColor: 'red' }} />
            </View>
            <View style={{ alignItems: 'center', flex: 3 }}>
                <TouchableOpacity style={{ height: '30%', width: "50%", backgroundColor: 'red' }} />
            </View>
        </View>
    )
}