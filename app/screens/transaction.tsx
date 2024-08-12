import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

export default function TransactionScreen() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [installment, setInstallment] = useState('');
  const [date, setDate] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    // Basic validation
    if (!name || !amount || !date || !accountNumber) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbwZ_zLroKiFynQaiY3KRiFpS1d-74WZg-prckaNglnqgL4LZWN8JJdDT9ld4pUHZWWI/exec',
        {
          params: {
            path: 'Transaction',
            action: 'write',
            Name: name,
            Amount: amount,
            Installment: installment,
            Date: date,
            AccountNumber: accountNumber,
          },
        }
      );

      setMessage('Transaction submitted successfully!');
      // Clear the form
      setName('');
      setAmount('');
      setInstallment('');
      setDate('');
      setAccountNumber('');
    } catch (error) {
      setMessage('An error occurred while submitting the transaction.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />

        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter Amount"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Installment</Text>
        <TextInput
          style={styles.input}
          value={installment}
          onChangeText={setInstallment}
          placeholder="Enter Installment"
        />

        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Enter Date"
        />

        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder="Enter Account Number"
          keyboardType="numeric"
        />

        <Button title="Submit" onPress={handleSubmit} />

        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
