import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import SetRow from './SetRow';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
    name: string;
    index: number;
    total: number;
    sets: { kg: string; reps: string; completed: boolean }[];
    onKgChange: (setIndex: number, value: string) => void;
    onRepsChange: (setIndex: number, value: string) => void;
    onToggle: (setIndex: number) => void;
    onAddSet: () => void;
};

function ExerciseCard({ name, index, total, sets, onKgChange, onRepsChange, onToggle, onAddSet }: Props) {
    return (
        <View style={{ backgroundColor: '#16161a', borderColor: '#d4ff3a', borderWidth: 0.5, margin: 10, borderRadius: 14, padding: 20 }}>
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: '#d4ff3a', fontSize: 11, fontWeight: '500' }}>AKTUALNE ĆWICZENIE</Text>
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>{name}</Text>
                <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>{index + 1}/{total}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 12, gap: 65, alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', marginTop: 12 }}>Seria</Text>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', marginTop: 12 }}>kg</Text>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', marginTop: 12 }}>Powt.</Text>
            </View>

            {sets.map((set, i) => (
                <SetRow
                    key={i}
                    index={i}
                    kg={set.kg}
                    reps={set.reps}
                    completed={set.completed}
                    onKgChange={(v) => onKgChange(i, v)}
                    onRepsChange={(v) => onRepsChange(i, v)}
                    onToggle={() => onToggle(i)}
                />
            ))}

            <TouchableOpacity onPress={onAddSet} style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
                    <MaterialCommunityIcons name="plus" size={14} color="rgba(255,255,255,0.3)" />
                    Dodaj serię</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExerciseCard
