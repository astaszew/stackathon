import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

class VideoPlay extends Component {
  render() {
    return (
        <View style = {styles.container}>
      <WebView
        javaScriptEnabled = {true}
        source={{uri: "https://player.twitch.tv/?channel=Lirik"}}
        style={{marginTop: 1}} scalesPageToFit={false} 
      />
      </View>
    );
  }
}
export default VideoPlay

const styles = StyleSheet.create({
    container:{
        height: 350,
    }
})