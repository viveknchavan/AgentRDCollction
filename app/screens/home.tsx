import React from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '@/components/Header';

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
    <SafeAreaView style={styles.container}>
      <Header title="Dashboard" />
      <View style={styles.iconContainer}>
        <View style={styles.row}>
          <Pressable style={styles.iconWrapper} onPress={() => handleNavigate('ProfileScreen')}>
            <MaterialCommunityIcons name="account" size={50} color="red" />
            <Text style={styles.iconLabel}>Profile</Text>
          </Pressable>
          <Pressable style={styles.iconWrapper} onPress={() => handleNavigate('CustomerScreen')}>
            <MaterialCommunityIcons name="account-group" size={50} color="purple" />
            <Text style={styles.iconLabel}>Customers</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.iconWrapper} onPress={() => handleNavigate('Profile')}>
            <MaterialCommunityIcons name="credit-card" size={50} color="orange" />
            <Text style={styles.iconLabel}>Transactions</Text>
          </Pressable>
          <Pressable style={styles.iconWrapper}>
            <MaterialCommunityIcons name="bank" size={50} color="teal" />
            <Text style={styles.iconLabel}>Balance Statement</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.iconWrapper}>
            <MaterialCommunityIcons name="post-outline" size={50} color="brown" />
            <Text style={styles.iconLabel}>Agent Statement</Text>
          </Pressable>
          <Pressable style={styles.iconWrapper}>
            <MaterialCommunityIcons name="post" size={50} color="brown" />
            <Text style={styles.iconLabel}>Agent Account Statement</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.iconWrapper}>
            <MaterialCommunityIcons name="calendar" size={50} color="coral" />
            <Text style={styles.iconLabel}>RD Scheme</Text>
          </Pressable>
          <Pressable style={styles.iconWrapper}>
            <MaterialCommunityIcons name="calendar-month" size={50} color="blueviolet" />
            <Text style={styles.iconLabel}>FD Scheme</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    width: '45%',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
