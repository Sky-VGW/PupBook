import { Redirect } from 'expo-router';

export default function Index() {
  // Retain index convention for root route while making dogsList the default screen
  return <Redirect href='/dogsList' />;
}
