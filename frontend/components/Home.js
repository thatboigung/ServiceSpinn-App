import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Import from react-native-vector-icons
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';  // Import additional icons for FaPlus, FaLocationPin, and FaUserCircle
import { useNavigation } from '@react-navigation/native';  // For navigation
import styles from './HomeStyles'; // Assuming the styles are defined in a separate file

const Home = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingsCl, setBookingsClients] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const userId = 'user123'; // Replace with real user ID fetch logic
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost/serviceSpinBackend/getBookings.php?user=${userId}`);
        const data = await response.json();
        if (data.success) {
          setBookings(data.data.providerBookings); // Adjusted to match the API response structure
        } else {
          Alert.alert('Failed to fetch bookings');
        }
      } catch (error) {
        Alert.alert(`Error: ${error.message}`);
      }
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    const userId = 'user123'; // Replace with real user ID fetch logic
    const fetchBookingsClients = async () => {
      try {
        const response = await fetch(`http://localhost/serviceSpinBackend/getBookingsClient.php?user=${userId}`);
        const data = await response.json();
        if (data.success) {
          setBookingsClients(data.data.providerBookings); // Adjusted to match the API response structure
        } else {
          Alert.alert('Failed to fetch bookings');
        }
      } catch (error) {
        Alert.alert(`Error: ${error.message}`);
      }
    };
    fetchBookingsClients();
  }, []);

  const handleAcceptBooking = async (bookingId) => {
    // Handle booking acceptance logic here
  };

  const handleDeleteBooking = async (bookingId) => {
    // Handle booking deletion logic here
  };

  const handleChat = (booking) => {
    navigation.navigate('Chat', { booking });
  };

  const handleCloseDeal = (bookingId) => {
    Alert.alert(`Deal closed for booking ${bookingId}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.home}>
      <View style={styles.mainCont}>
        <Text>Your one-stop solution for all services.</Text>
        <View style={styles.searchInput}>
          <Ionicons name="search" size={25} color="gray" />
          <TextInput placeholder="What Are You Looking For" style={styles.input} />
        </View>

        <View style={styles.servicesContainer}>
          {/* <View style={styles.services}>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Plumbers</Text>
              <Image source={require('./assets/plamber.jpeg')} style={styles.serviceImage} />
            </View>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Electricians</Text>
              <Image source={require('./assets/electrician.jpg')} style={styles.serviceImage} />
            </View>
            
          </View> */}

          <TouchableOpacity onPress={() => navigation.navigate('Listings')} style={styles.moreServicesBtn}>
            <FontAwesome5 name="plus" size={20} color="white" />
            <Text style={styles.moreServicesText}>More Services</Text>
          </TouchableOpacity>

          <View style={styles.pastBookings}>
            <Text style={styles.sectionTitle}>Bookings</Text>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <View key={booking.id} style={styles.bookingItem}>
                  <FontAwesome name="user-circle" size={40} color="gray" style={styles.userIcon} />
                  <View style={styles.bookingDetails}>
                    <Text>{booking.client_name}</Text>
                    <Text>{booking.issue_description}</Text>
                    <Text style={styles.location}><FontAwesome5 name="map-pin" size={15} /> {booking.location}</Text>
                    <Text>Status: {booking.status}</Text>
                  </View>
                  <View style={styles.bookingActions}>
                    {booking.status === 'Pending' && (
                      <>
                        <TouchableOpacity onPress={() => handleAcceptBooking(booking.id)} style={styles.acceptBtn}>
                          <Text>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDeleteBooking(booking.id)} style={styles.cancelBtn}>
                          <Text>Cancel</Text>
                        </TouchableOpacity>
                      </>
                    )}
                    {booking.status === 'Accepted' && (
                      <>
                        <TouchableOpacity onPress={() => handleChat(booking)} style={styles.acceptBtn}>
                          <Text>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleCloseDeal(booking.id)} style={styles.cancelBtn}>
                          <Text>Close</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              ))
            ) : (
              <Text>No current bookings available.</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
