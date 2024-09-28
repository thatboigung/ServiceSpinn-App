import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ onLogin }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/serviceSpinBackend/logIn.inc.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });
      const data = await response.json();
      if (data.success) {
        await AsyncStorage.setItem('userId', data.user.id.toString());
        onLogin(data.user);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isLoading ? 'Logging in...' : 'Login'} onPress={handleSubmit} disabled={isLoading} />
      {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default Login;
