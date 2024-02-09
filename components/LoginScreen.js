import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

export default function LoginScreen({ navigation }) {

  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [loggedIn, setLogInStatus] = useState(false)

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {!loggedIn && (<Text style={styles.regularText}>Login to continue </Text>)}
        {!loggedIn && (<TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType={"email-address"} />)}
        {!loggedIn && (<TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true} />)}
        {!loggedIn && (<Pressable style={styles.button} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>)}
        {loggedIn && (
          <Text style={styles.headerText}>
            You are logged in!
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  headerText: {
    padding: 40,
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
  input: {
    height: 30,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  button: {
    height: 50,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 100,
    margin: 40,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center'
  }
});

