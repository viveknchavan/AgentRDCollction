import React from 'react';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import Button from '@/components/Button';

export default function ProfileScreen() {
  // Dummy user data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://example.com/profile.jpg',
    bio: 'Software Developer based in New York',
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        {user.bio ? <Text style={styles.bio}>{user.bio}</Text> : null}
      </View>
      <Pressable style={styles.editButton} onPress={() => console.log('Edit Profile Pressed')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  editButton: {
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignSelf: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
