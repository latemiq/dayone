import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { colors } from '../constans/colors';

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
                backgroundColor: colors.danger,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                borderRadius: 8,
                marginTop: 12,
            }}
        >
            <MaterialCommunityIcons name="trash-can-outline" size={20} color={colors.textPrimary} />
        </TouchableOpacity>
    );
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={{
                flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 12, borderTopWidth: 1,
                borderTopColor: colors.cardDark,
                paddingTop: 12,
            }}>
                <Text style={{
                    color: completed ? colors.textDim : active ? colors.accent : colors.textFaint, fontSize: 14, fontWeight: '500', width: 24, textAlign: 'center'
                }}>{index + 1}</Text>
                <View style={{ flexDirection: 'row', flex: 1, gap: 12 }}>
                    <TextInput
                        editable={!completed}
                        style={{
                            backgroundColor: colors.inputBg,
                            color: colors.textPrimary,
                            borderRadius: 8, padding: 10,
                            flex: 1,
                            height: 44,
                            textAlign: 'center',
                        }}
                        keyboardType="numeric"
                        placeholder="—"
                        placeholderTextColor={colors.textGhost}
                        value={kg}
                        onChangeText={onKgChange}
                    />
                    <TextInput
                        editable={!completed}
                        style={{
                            backgroundColor: colors.inputBg,
                            color: colors.textPrimary,
                            borderRadius: 8, padding: 10,
                            flex: 1,
                            height: 44,
                            textAlign: 'center',
                        }}
                        keyboardType="numeric"
                        placeholder="—"
                        placeholderTextColor={colors.textGhost}
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
                        backgroundColor: completed ? colors.checkCompletedBg : colors.checkActiveBg,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <MaterialCommunityIcons
                        name="check"
                        size={16}
                        color={completed ? colors.checkCompletedIcon : colors.checkActiveIcon}
                    />
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
}

