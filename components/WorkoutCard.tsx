import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WorkoutCard() {
    return (

        <View style={styles.cards}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={styles.cardIcon}>
                        <MaterialCommunityIcons name="dumbbell" size={16} color="#d4ff3a" />
                    </View>
                    <View>
                        <Text style={styles.cardText1}>Push day</Text>
                        <Text style={styles.cardText2}>6 ćwiczeń · ~50 min</Text>
                    </View>
                </View>
                <Text style={{ color: '#737373', fontSize: 11 }}>2 dni temu</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                <TouchableOpacity style={styles.buttonStart}>
                    <Text style={styles.buttonStartText}>Zacznij</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWarmup}>
                    <Text style={styles.buttonWarmupText}>5 min rozgrzewka</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cards: {
        backgroundColor: '#16161a',
        margin: 10,
        borderRadius: 25,
        padding: 20,
    },
    cardText1: {
        color: '#FFFFFF',
        fontSize: 22,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    cardText2: {
        fontSize: 14,
        padding: 10,
        color: '#737373',
    },
    cardIcon: {
        backgroundColor: 'rgba(212,255,58,0.12)',
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStart: {
        borderRadius: 25,
        backgroundColor: "#d4ff3a",
        padding: 10,
    },
    buttonStartText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    buttonWarmup: {
        borderRadius: 25,
        backgroundColor: "#16161a",
        borderWidth: 1,
        borderColor: "#d4ff3a",
        padding: 10,
    },
    buttonWarmupText: {
        color: "#d4ff3a",
        fontWeight: 'bold',
    },
});
