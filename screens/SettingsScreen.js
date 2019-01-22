import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
const axios = require('axios')
import SearchUsername from '../components/SearchUsername'
import publicId from '../secrets'
axios.defaults.headers.common['Client-ID'] = publicId


export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userName: '',
      twitchData:'',
    }
    
  }
  static navigationOptions = {
    title: 'TwitchData',
  };

   onPress = () =>{
    
    this.getData();
    
  }

  async getData(){
    let {data} = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${this.state.userName}`)
    this.setState({
      twitchData:data
    })
    
  }

  onChangeText = userName => this.setState({userName})


//   async componentDidUpdate(){
//     console.log(this.state.userName)
//     let {data} = axios.get(`https://api.twitch.tv/helix/streams?user_login=${this.state.userName}`)
//     console.log(data)

//   this.setState({
//     twitchInfo:data
// })
// }




  render() {
    return(
      (!this.state.twitchData)?(
      <View>
        <Text style={styles.title}>Enter a username to search:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="username here"
          onChangeText={this.onChangeText}
          value={this.state.userName}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      ):(
        <SearchUsername info = {this.state.twitchData} />
      )

      )
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

