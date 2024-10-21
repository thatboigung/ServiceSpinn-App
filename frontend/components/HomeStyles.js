import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  home: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  mainCont: {
    width: '100%',
    maxWidth: 800,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 63,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 6,
    marginBottom: 16,
  },
  input: {
    marginLeft: 8,
    fontSize: 20,
    width: '90%',
  },
  servicesContainer: {
    marginTop: 40,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  serviceItem: {
    width: '48%',
    height: 200,
    borderRadius: 12,
    backgroundColor: 'rgba(165, 164, 164, 0.233)',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceTitle: {
    position: 'absolute',
    zIndex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
  moreServicesBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'blue',
    marginTop: 20,
  },
  moreServicesText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  pastBookings: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  userIcon: {
    marginRight: 16,
  },
  bookingDetails: {
    flex: 1,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingActions: {
    flexDirection: 'row',
  },
  acceptBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  cancelBtn: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 6,
  },
});

export default styles;
