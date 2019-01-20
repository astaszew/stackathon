import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';






const DisplayInfo= (props) => {
    let information = props.info.data
   

  return (
    (Array.isArray(information))? (
        <View style={styles.infoContainer}>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons size={70} name="xbox-controller"  />
            <Text style={styles.title}> Top Twitch Channels</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style ={styles.infoText}>
            </View>
                {
                information.map(name =>{
                    
                    return(
                        <View style={styles.infoContainer} key = {name.user_id}>
                        <Text style = {styles.infoText}>
                       Channel: {name.user_name}
                        </Text>
                        <Text style = {styles.subsbutitle}>
                        Title: {name.title}
                    
                        </Text>
                        <Text style = {styles.subtitle}>
                        Viewer Count: {name.viewer_count}
                    
                        </Text>
                        </View>
                    )
                    
                })
            }
            <Text style={styles.subtitle}>much wow</Text>
          </View>
        </View>
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
    fontSize: 16,
    color: '#fff'
  },
  subsbutitle:{
      fontSize:17,
      color:'#172335'
  }
});

export default DisplayInfo;