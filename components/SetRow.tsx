import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

type Props = {
    index: number;
    kg: string;
    reps: string;
    completed: boolean;
    onKgChange: (value: string) => void;
    onRepsChange: (value: string) => void;
    onToggle: () => void;
};

export default function SetRow({ index, kg, reps, completed, onKgChange, onRepsChange, onToggle }: Props) {

    return (
        <View style={{
            flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 12, borderTopWidth: 1,
            borderTopColor: '#1f1f24',
            paddingTop: 12,}}>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', width: 24, textAlign: 'center' }}>{index + 1}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 32, justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <TextInput
                    style={{
                        backgroundColor: '#1f1f24',
                        color: '#fff',
                        borderRadius: 8, padding: 8,
                        width: 80, height: 50,
                        textAlign: 'center',
                    }}
                    keyboardType="numeric"
                    placeholder="—"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    value={kg}
                    onChangeText={onKgChange}
                />
                <TextInput
                    style={{
                        backgroundColor: '#1f1f24',
                        color: '#fff',
                        borderRadius: 8, padding: 8,
                        width: 80, height: 50,
                        textAlign: 'center',
                    }}
                    keyboardType="numeric"
                    placeholder="—"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    value={reps}
                    onChangeText={onRepsChange}
                />
                <TouchableOpacity
                    onPress={() => onToggle()}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 8,
                        backgroundColor: completed ? 'rgba(212,255,58,0.15)' : 'rgba(255,255,255,0.06)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <MaterialCommunityIcons
                        name="check"
                        size={16}
                        color={completed ? '#d4ff3a' : 'rgba(255,255,255,0.2)'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

