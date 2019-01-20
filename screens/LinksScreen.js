import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import DisplayInfo from '../components/DisplayInfo'
const axios = require('axios')
import publicId from '../secrets'
axios.defaults.headers.common['Client-ID'] = publicId


export default class LinksScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      twitchInfo:{}
    }
  }
  static navigationOptions = {
    title: 'TwitchData',
  };

async componentDidMount(){
  
  // fetch('http://172.16.21.201:8080/api/information')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  //   console.log('just json',myJson)
  // });
    // let {res} = await axios.get('http://172.16.21.201:8080/api/information');
    // let jsonRes = res.json()
    // console.log('Any data here?',JSON.stringify(jsonRes))

    let {data} = await axios.get('https://api.twitch.tv/helix/streams?first=10')
    
   
  


  this.setState({
    twitchInfo:data
})
}



  render() {
    return (
      <ScrollView style={styles.container}>
        <DisplayInfo info = {this.state.twitchInfo}/>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
