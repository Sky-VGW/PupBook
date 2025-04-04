import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName='dogsList'>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name='dogsList' options={{ 
        title: 'PupBook',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name='dog/[id]' options={{ 
        title: 'Dog Details',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </Stack>
  );
}
