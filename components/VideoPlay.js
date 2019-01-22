import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

const VideoPlay = (props) => {
      let twitchUri = `https://player.twitch.tv/?channel=${props.name}`
    return (
        <View style = {styles.container}>
      <WebView
        javaScriptEnabled = {true}
        source={{uri: twitchUri}}
        style={{marginTop: 1}} scalesPageToFit={false} 
      />
      </View>
    );
  
}
export default VideoPlay

const styles = StyleSheet.create({
    container:{
        height: 350,
    }
})