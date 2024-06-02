import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import MainHeader from './Components/Header';
import Categories from './Components/Categories';
import SearchBar from './Components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import OngoingTask from './Components/OngoingTask';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MainHeader />
      <SearchBar />
      <Categories />
      <OngoingTask />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E8D1BA',
    paddingTop: 30,
  },
});