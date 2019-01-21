import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

class ChatView extends Component {
  render() {
    return (
        <View style = {styles.container}>
      <WebView
        javaScriptEnabled = {true}
        source={{uri: "https://www.twitch.tv/embed/lirik/chat"}}
        style={{marginTop: 1}} scalesPageToFit={false} 
      />
      </View>
    );
  }
}
export default ChatView

const styles = StyleSheet.create({
    container:{
        height: 350,
    }
})