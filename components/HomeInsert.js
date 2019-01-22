import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeInsert = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={70} name="google-controller"  />
        <Text style={styles.infoText}>Twitch Channel Discovery</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Alec Staszewski</Text>
        <Text style={styles.subtitle}></Text>
      </View>
    </View>
  );
};

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
    fontSize: 48,
    color: '#fff'
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
    fontSize: 24,
    color: '#fff'
  }
});

export default HomeInsert;