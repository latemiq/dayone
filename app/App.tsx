import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WorkoutCard from '../components/WorkoutCard';
import { useState } from 'react';

export default function App() {

  const [workouts, setWorkouts] = useState([
    { id: '1', name: 'Push day', exercises: 6, time: 50, lastDone: '2 dni temu', warmup: 5 },
    { id: '2', name: 'Pull day', exercises: 5, time: 45, lastDone: '4 dni temu', warmup: 5 },
    { id: '3', name: 'Leg day', exercises: 7, time: 60, lastDone: '1 tydzień temu', warmup: 10 },
    { id: '4', name: 'Bieg 5K', exercises: 0, time: 30, lastDone: '5 dni temu', warmup: 0 },
  ]);

  const handleNewWorkout = () => {
    const newWorkout = {
      id: String(workouts.length + 1),
      name: 'Nowy trening',
      exercises: 0,
      time: 0,
      lastDone: 'nigdy',
      warmup: 0,
    };
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <><ScrollView>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={{ color: '#737373' }}>Poniedziałek, 26 maja</Text>
          <Text style={styles.text1}>Hej, Marek</Text>
        </View>
        <StatusBar style="light" />
        <View style={styles.streakBox}>
          <Text style={styles.text}>SERIA TRENINGOWA</Text>
          <Text style={{ fontSize: 22, fontWeight: '500', color: '#0a0a0b' }}>12 dni</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ color: '#737373', fontSize: 14, marginLeft: 10, marginBottom: 8 }}>Twoje treningi</Text>
          <TouchableOpacity onPress={handleNewWorkout}>
            <Text style={{ color: '#737373', fontSize: 14, marginLeft: 10, marginBottom: 8 }}>+ Nowy</Text>
          </TouchableOpacity>
        </View>

        {/* Tutaj będą karty z treningami */}
        {workouts.map((item) => (
          <WorkoutCard
            key={item.id}
            name={item.name}
            exercises={item.exercises}
            time={item.time}
            lastDone={item.lastDone}
            warmup={item.warmup} />
        ))}
      </View>
    </ScrollView>
      <View style={{ backgroundColor: '#000000', padding: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => console.log('Strona główna')}>
          <MaterialCommunityIcons name="home" color="#d4ff3a" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Historia')}>
          <MaterialCommunityIcons name="history" color="#d4ff3a" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Statystyki')}>
          <MaterialCommunityIcons name="chart-line" color="#d4ff3a" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Profil')}>
          <MaterialCommunityIcons name="account-outline" color="#d4ff3a" size={20} />
        </TouchableOpacity>
      </View></>
      
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
