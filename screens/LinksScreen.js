import React from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import DisplayInfo from '../components/DisplayInfo'
const axios = require('axios')
import publicId from '../secrets'
axios.defaults.headers.common['Client-ID'] = publicId


export default class LinksScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      twitchInfo:{},
      refreshing: false
    }
  }
  static navigationOptions = {
    title: 'TwitchData',
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }


async componentDidMount(){
  
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
