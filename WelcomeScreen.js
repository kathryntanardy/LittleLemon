import React, { useState } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, useColorScheme } from 'react-native';

export default function WelcomeScreen() {

  const [firstName, onChangeFirstName] = useState('');
  const colorScheme = useColorScheme();

  return (
    <ScrollView indicatorStyle="white" style={[styles.container, colorScheme === 'light' ? { backgroundColor: '#333333', fontColor: 'white' } : { backgroundColor: '#333333', fontColor: 'white' },]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.icon}
          source={require('./img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'} />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>

      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 20,
  }
});
