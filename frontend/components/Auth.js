import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Login from './Login';
import Signup from './Singup';

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome To</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>ServiceSpin</Text>
      <Text>Your one-stop solution for all services.</Text>
      
      {isLogin ? (
        <Login onLogin={onLogin} />
      ) : (
        <Signup />
      )}

      <TouchableOpacity onPress={toggleAuthMode}>
        <Text style={{ color: 'blue', marginTop: 10 }}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Auth;
