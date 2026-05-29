import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

type Props = {
    index: number;
    kg: string;
    reps: string;
    completed: boolean;
    active: boolean;
    onKgChange: (value: string) => void;
    onRepsChange: (value: string) => void;
    onToggle: () => void;
    onDelete: () => void;
};

export default function SetRow({ index, kg, reps, completed, active, onKgChange, onRepsChange, onToggle, onDelete }: Props) {

    const renderRightActions = () => (
        <TouchableOpacity
            onPress={onDelete}
            style={{
                backgroundColor: '#ff4444',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                borderRadius: 8,
                marginTop: 12,
            }}
        >
            <MaterialCommunityIcons name="trash-can-outline" size={20} color="#fff" />
        </TouchableOpacity>
    );
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={{
                flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 12, borderTopWidth: 1,
                borderTopColor: '#1f1f24',
                paddingTop: 12,
            }}>
                <Text style={{
                    color: completed ? 'rgba(255,255,255,0.35)' : active ? '#d4ff3a' : 'rgba(255,255,255,0.3)', fontSize: 14, fontWeight: '500', width: 24, textAlign: 'center'
                }}>{index + 1}</Text>
                <View style={{ flexDirection: 'row', flex: 1, gap: 12 }}>
                    <TextInput
                        editable={!completed}
                        style={{
                            backgroundColor: '#1f1f24',
                            color: '#fff',
                            borderRadius: 8, padding: 10,
                            flex: 1,
                            height: 44,
                            textAlign: 'center',
                        }}
                        keyboardType="numeric"
                        placeholder="—"
                        placeholderTextColor="rgba(255,255,255,0.2)"
                        value={kg}
                        onChangeText={onKgChange}
                    />
                    <TextInput
                        editable={!completed}
                        style={{
                            backgroundColor: '#1f1f24',
                            color: '#fff',
                            borderRadius: 8, padding: 10,
                            flex: 1,
                            height: 44,
                            textAlign: 'center',
                        }}
                        keyboardType="numeric"
                        placeholder="—"
                        placeholderTextColor="rgba(255,255,255,0.2)"
                        value={reps}
                        onChangeText={onRepsChange}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => onToggle()}
                    style={{
                        width: 44,
                        height: 44,
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
        </Swipeable>
    );
}

