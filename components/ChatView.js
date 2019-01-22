import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

const ChatView = (props) => {
      console.log(props.name, "props")
      let twitchUri = `https://www.twitch.tv/embed/${props.name}/chat`
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

export default ChatView

const styles = StyleSheet.create({
    container:{
        height: 350,
    }
})