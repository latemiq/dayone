import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WorkoutCard from '../components/WorkoutCard';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={{ color: '#737373' }}>Poniedziałek, 26 maja</Text>
        <Text style={styles.text1}>Hej, Marek</Text>
      </View>
      <StatusBar style="light" />
      <ScrollView style={styles.streakBox}>
        <Text style={styles.text}>SERIA TRENINGOWA</Text>
        <Text style={{ fontSize: 22, fontWeight: '500', color: '#0a0a0b' }}>12 dni</Text>
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 20 }}>
        <Text style={{ color: '#737373', fontSize: 14, marginLeft: 10, marginBottom: 8 }}>Twoje treningi</Text>
        <Text style={{ color: '#737373', fontSize: 14, marginLeft: 10, marginBottom: 8 }}>+ Nowy</Text>
      </View>

      {/* Tutaj będą karty z treningami */}
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0b',
  },
  menu: {
    backgroundColor: '#000000',
    paddingBottom: 16,
    paddingTop: 50,
  },
  streakBox: {
    backgroundColor: '#d4ff3a',
    padding: 20,
    margin: 10,
    borderRadius: 25,
  },
  streakBoxtext1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    color: '#737336',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
