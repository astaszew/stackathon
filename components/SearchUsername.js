import React from 'react';
import Iframe from 'react-iframe'
import { View, Text, StyleSheet, Image, WebView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoPlay from '../components/VideoPlay'
import ChatView from '../components/ChatView'



const SearchUsername= (props) => {
    let information = props.info.data
   

  return (
    (Array.isArray(information))? (
        <ScrollView style={styles.infoContainer}>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons size={70} name="xbox-controller"  />
            
            
          </View>
          <View style={styles.bodyContainer}>
            <View style ={styles.infoText}>
            </View>
                {
                information.map(name =>{
                    
                    return(
                        <View style={styles.infoContainer} key = {name.user_id}>
                        <Text style = {styles.title}>
                       Streamer: {name.user_name}
                        </Text>
                        <Text style = {styles.subtitle}>
                        Current Stream Title: {name.title}
                    
                        </Text>
                        <Text style = {styles.subtitle}>
                        Current Viewer Count: {name.viewer_count}
                    
                        </Text>
                        <VideoPlay/>
                        <ChatView/>
                        </View>
                    )
                    
                })
            }
            <Text style={styles.subtitle}>much wow</Text>
          </View>
        </ScrollView>
      )
    
         :

        <Text style = {styles.title}>
            still loading
            </Text>

            )
    }


const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: '#327ef7'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: 22,
    color: '#0A0706'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 30,
    color: '#172335'
  },
  subsbutitle:{
      fontSize:17,
      color:'#172335'
  }
});

export default SearchUsername;