import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Listings from './components/Listings';
import ViewListing from './components/ViewListing';
import Chat from './components/Chat';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreateService from './components/CreateService';
import Auth from './components/Auth';
import Topbar from './components/Topbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch(`http://localhost/serviceSpinBackend/getUser.php?userId=${userId}`);
          const data = await response.json();
          if (data.success) {
            setUser(data.user);
            setIsServiceProvider(data.user.isServiceProvider);
          } else {
            await AsyncStorage.removeItem('userId');
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleLogin = async (user) => {
    setUser(user);
    setIsServiceProvider(user.isServiceProvider);
    await AsyncStorage.setItem('userId', user.id.toString());
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userId');
    setUser(null);
    setIsServiceProvider(false);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Listings" component={Listings} />
            <Stack.Screen name="ViewListing" component={ViewListing} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="CreateService" component={CreateService} />
          </>
        ) : (
          <Stack.Screen name="Auth">
            {(props) => <Auth {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
