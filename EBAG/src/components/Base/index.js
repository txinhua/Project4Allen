import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView
} from 'react-native';
import styles from "./styles";
import { View } from "native-base";

export default class Base extends Component {
  render() {
    return (
        <ImageBackground style={styles.background}  source={require('./../../../resources/bg-images/bg_global.png')} resizeMode="stretch">
        <SafeAreaView style={styles.safeArea}>
            { this._renderContainer() }
        </SafeAreaView>
      </ImageBackground>
    );
  }

/**  
* 内容布局  
*/  
  _renderContainer() {  
    const { content } = this.props;  
    return ( 
       <View style={styles.parent}>  
         { content }
       </View>    
    )  
  }
}