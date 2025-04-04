import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { type Dog } from './data/dogs';
import { useDogs } from './hooks/useDogs';

export default function DogsList() {
  const router = useRouter();
  const { getAllDogs } = useDogs();
  const dogs = getAllDogs();

  // Function to render dog cards, iterated over and implemented in the FlatList
  const renderDog = ({ item }: { item: Dog }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => router.push({
        pathname: '/dog/[id]',
        params: { id: item.id }
      })}
    >
      <Text style={styles.name}>Name: {item.name}</Text>
      <Text style={styles.id}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        renderItem={renderDog}
        keyExtractor={(dog) => dog.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 8,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '48%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
});