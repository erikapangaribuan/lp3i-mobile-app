import React, { useState } from 'react';
import {ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';

// LoginScreen Component
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  const handleLogin = () => {
    // Replace with your actual authentication logic
    // Here's a simulated example for demonstration purposes:
    if (username === 'lina' && password === 'lina123') {
      navigation.navigate('Dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
    <View style={styles.loginOverlay}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false} // Disable autocorrect for security
      />
      

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Securely hide password characters
      />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <Button title="Login" onPress={handleLogin} />
      
    </View>
    </ImageBackground>
  );
};

export default LoginScreen; // Export LoginScreen separately

// HomeScreen Component (assuming it exists)
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Your HomeScreen content */}
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
 
    container: {
    
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    loginOverlay:{
      backgroundColor:'rgba(0,0,0,0.5),',
      padding:20,
      borderRadius:10,
    },
    title: {
      color:'#fff',
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      borderRadius: 5,
      color:'#fff',
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
    },
  
});