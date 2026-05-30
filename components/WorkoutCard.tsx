import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../constans/colors';

type Props = {
    name: string;
    exercises: number;
    time: number;
    lastDone: string;
    warmup: number;
}

export default function WorkoutCard({ name, exercises, time, lastDone, warmup }: Props) {
    const router = useRouter();
    return (

        <View style={styles.cards}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={styles.cardIcon}>
                        <MaterialCommunityIcons name="dumbbell" size={16} color={colors.accent} />
                    </View>
                    <View>
                        <Text style={styles.cardText1}>{name}</Text>
                        <Text style={styles.cardText2}>{exercises} ćwiczeń · ~{time} min</Text>
                    </View>
                </View>
                <Text style={{ color: colors.textSubtle, fontSize: 11 }}>{lastDone}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                <TouchableOpacity style={styles.buttonStart} onPress={() => router.push({ pathname: '/workout', params: { name: name } })}>
                    <Text style={styles.buttonStartText}>
                        Zacznij
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWarmup}>
                    <Text style={styles.buttonWarmupText}>{warmup} min rozgrzewka</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cards: {
        backgroundColor: colors.card,
        margin: 10,
        borderRadius: 25,
        padding: 20,
    },
    cardText1: {
        color: colors.textPrimary,
        fontSize: 22,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    cardText2: {
        fontSize: 14,
        padding: 10,
        color: colors.textSubtle,
    },
    cardIcon: {
        backgroundColor: colors.accentBg,
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStart: {
        borderRadius: 25,
        backgroundColor: colors.accent,
        padding: 10,
    },
    buttonStartText: {
        color: colors.onAccent,
        fontWeight: 'bold',
    },
    buttonWarmup: {
        borderRadius: 25,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.accent,
        padding: 10,
    },
    buttonWarmupText: {
        color: colors.accent,
        fontWeight: 'bold',
    },
});
