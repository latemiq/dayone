import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import SetRow from './SetRow';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../constans/colors';

type Props = {
    name: string;
    index: number;
    total: number;
    sets: { kg: string; reps: string; completed: boolean }[];
    onKgChange: (setIndex: number, value: string) => void;
    onRepsChange: (setIndex: number, value: string) => void;
    onToggle: (setIndex: number) => void;
    onAddSet: () => void;
    onDeleteSet: (setIndex: number) => void;
};

function ExerciseCard({ name, index, total, sets, onKgChange, onRepsChange, onToggle, onAddSet, onDeleteSet }: Props) {
    const activeIndex = sets.findIndex(s => !s.completed);
    return (
        <View style={{ backgroundColor: colors.card, borderColor: colors.accent, borderWidth: 0.5, margin: 10, borderRadius: 14, padding: 20 }}>
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '500' }}>AKTUALNE ĆWICZENIE</Text>
                <Text style={{ color: colors.textPrimary, fontSize: 17, fontWeight: '500' }}>{name}</Text>
                <Text style={{ color: colors.textFaint, fontSize: 11 }}>{index + 1}/{total}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 4 }}>
                <Text style={{ color: colors.textDim, fontSize: 11, width: 30, textAlign: 'center' }}>Seria</Text>
                <Text style={{ color: colors.textDim, fontSize: 11, flex: 1, textAlign: 'center', marginHorizontal: 6 }}>kg</Text>
                <Text style={{ color: colors.textDim, fontSize: 11, flex: 1, textAlign: 'center', marginHorizontal: 6 }}>Powt.</Text>
                <View style={{ width: 44 }} />
            </View>

            {sets.map((set, i) => (
                <SetRow
                    key={i}
                    index={i}
                    kg={set.kg}
                    reps={set.reps}
                    completed={set.completed}
                    active={i === activeIndex}
                    onKgChange={(v) => onKgChange(i, v)}
                    onRepsChange={(v) => onRepsChange(i, v)}
                    onToggle={() => onToggle(i)}
                    onDelete={() => onDeleteSet(i)}
                />
            ))}

            <TouchableOpacity onPress={onAddSet} style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.textFaint, fontSize: 12 }}>
                    <MaterialCommunityIcons name="plus" size={14} color={colors.textFaint} />
                    Dodaj serię</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExerciseCard
