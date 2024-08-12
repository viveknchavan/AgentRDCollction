import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import Header from '@/components/Header';
import axios from 'axios';

type Transaction = {
  Name: string;
  Amount: string;
  Installment: string;
  Date: string;
  AccountNumber: string;
};

export default function SearchScreen() {
  const [accountNumberQuery, setAccountNumberQuery] = useState('');
  const [dateQuery, setDateQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null); // Clear previous error message
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbwZ_zLroKiFynQaiY3KRiFpS1d-74WZg-prckaNglnqgL4LZWN8JJdDT9ld4pUHZWWI/exec'   
        , {
          params: {
            path: 'Transaction',
            action: 'search',
            AccountNumber: accountNumberQuery,
            Date: dateQuery,
          },
        }
      );

      console.log('API Response:', response.data);

      // Extract transactions from the response data
      const transactions = response.data.data;

      // Check and log the transactions
      if (Array.isArray(transactions)) {
        setFilteredTransactions(transactions);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      setError('An error occurred while fetching transactions.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>Name: {item.Name}</Text>
      <Text style={styles.transactionText}>Amount: {item.Amount}</Text>
      <Text style={styles.transactionText}>Installment: {item.Installment}</Text>
      <Text style={styles.transactionText}>Date: {item.Date}</Text>
      <Text style={styles.transactionText}>Account Number: {item.AccountNumber}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search Transactions" />
      <View style={styles.searchContainer}>
        <Text style={styles.label}>Search by Account Number</Text>
        <TextInput
          style={styles.input}
          value={accountNumberQuery}
          onChangeText={setAccountNumberQuery}
          placeholder="Enter Account Number"
        />

        <Text style={styles.label}>Search by Date</Text>
        <TextInput
          style={styles.input}
          value={dateQuery}
          onChangeText={setDateQuery}
          placeholder="Enter Date"
        />

        <Button title="Search" onPress={handleSearch} />
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={filteredTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.AccountNumber.toString() + item.Date} // Ensure key is unique
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    marginBottom: 20,
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
  list: {
    flexGrow: 1,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});
