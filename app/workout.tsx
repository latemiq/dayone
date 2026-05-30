import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import { colors } from '../constans/colors';

export default function Workout() {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    const [seconds, setSeconds] = React.useState(0);
    const [sets, setSets] = useState([
        { kg: '', reps: '', completed: false },
        { kg: '', reps: '', completed: false },
        { kg: '', reps: '', completed: false },
        { kg: '', reps: '', completed: false },
    ]);

    const updateKg = (index: number, value: string) => {
        const updated = [...sets];
        updated[index].kg = value;
        setSets(updated);
    };

    const updateReps = (index: number, value: string) => {
        const updated = [...sets];
        updated[index].reps = value;
        setSets(updated);
    };

    const toggleSet = (index: number) => {
        const updated = [...sets];
        updated[index].completed = !updated[index].completed;
        setSets(updated);
    };

    const addSet = () => {
        setSets([...sets, { kg: '', reps: '', completed: false }]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (s: number)
        : string => {
        const minutes = Math.floor(s / 60);
        const seconds = s % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const deleteSet = (index: number) => {
        setSets(sets.filter((_, i) => i !== index));
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <TouchableOpacity onPress={() => router.back()} style={{ backgroundColor: colors.dangerBg, justifyContent: 'center', alignItems: 'center', width: 32, height: 32, borderRadius: 8 }}>
                            <MaterialCommunityIcons name="close" size={16} color={colors.danger} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '500' }}>{name}</Text>
                        <Text style={{ color: colors.textMuted, fontSize: 14 }}>W trakcie...</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.inputBg, borderRadius: 99, paddingVertical: 8, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <MaterialCommunityIcons name="clock-outline" size={14} color={colors.accent} />
                    <Text style={{ color: colors.textPrimary, fontSize: 14, fontWeight: 500 }}>{formatTime(seconds)}</Text>
                </View>
            </View>

            <ExerciseCard
                name="Wyciskanie sztangą"
                index={0}
                total={6}
                sets={sets}
                onKgChange={updateKg}
                onRepsChange={updateReps}
                onToggle={toggleSet}
                onAddSet={addSet}
                onDeleteSet={deleteSet}
            />

        </ScrollView>
    );
}
