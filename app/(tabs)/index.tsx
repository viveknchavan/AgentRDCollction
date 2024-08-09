import { Image, StyleSheet, Platform } from 'react-native';


import { View, Text,  TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ProfileScreen from './Profile';
import CustomerScreen from './Customers';

type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  CustomerScreen: undefined;
  Profile: undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
 <Text style={styles.title}>Dashboard</Text>
    <View style={styles.iconContainer}>
    <View style={styles.row}>
        <TouchableOpacity style={styles.iconWrapper}  onPress={() => handleNavigate('ProfileScreen')}>
          <MaterialCommunityIcons name="account" size={50} color="red" />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => handleNavigate('CustomerScreen')}>
          <MaterialCommunityIcons name="account-group" size={50} color="purple" />
          <Text style={styles.iconLabel}>Customer's</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.row}>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => handleNavigate('Profile')}>
          <MaterialCommunityIcons name="credit-card" size={50} color="orange" />
          <Text style={styles.iconLabel}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="bank" size={50} color="teal" />
          <Text style={styles.iconLabel}>Balance Statement</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.row}>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="post-outline" size={50} color="brown" />
          <Text style={styles.iconLabel}>Agent Statement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="post" size={50} color="brown" />
          <Text style={styles.iconLabel}>Agent Account Statement</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.row}>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="calendar" size={50} color="coral" />
          <Text style={styles.iconLabel}>RD Scheme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="calendar-month" size={50} color="blueviolet" />
          <Text style={styles.iconLabel}>FD Scheme</Text>
        </TouchableOpacity>
    </View>
  </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    width: '45%', // Adjust width for spacing
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
