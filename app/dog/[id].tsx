import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useDogs } from '../hooks/useDogs';

export default function DogDetails() {
  const { id } = useLocalSearchParams();
  const { getDogById } = useDogs();
  const dog = getDogById(Number(id));

  if (!dog) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Dog not found</Text>
      </View>
    );
  }

  const renderDetailRow = (key: string, value: string | number | boolean | string[]) => (
    <View style={styles.row}>
      <Text style={styles.key}>{key}:</Text>
      <Text style={styles.value}>
        {Array.isArray(value) ? value.join(', ') : String(value)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{dog.name}</Text>
        <View style={styles.detailsContainer}>
          {renderDetailRow('ID', dog.id)}
          {renderDetailRow('Breeds', dog.breed)}
          {renderDetailRow('Activity Level', `${dog.activityLevel}/10`)}
          {renderDetailRow('Status', dog.neuteredStatus ? 'Neutered' : 'Not Neutered')}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  detailsContainer: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  key: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    width: 120,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
}); 