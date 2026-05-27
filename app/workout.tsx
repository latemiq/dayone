import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect } from 'react';

export default function Workout() {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    const [seconds, setSeconds] = React.useState(0);

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
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#0a0a0b' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <TouchableOpacity onPress={() => router.push('/App')} style={{ backgroundColor: 'rgba(255,68,68,0.15)', justifyContent: 'center', alignItems: 'center', width: 32, height: 32, borderRadius: 8 }}>
                        <MaterialCommunityIcons name="close" size={16} color="#ff4444" />
                    </TouchableOpacity>
                </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>{name}</Text>
                        <Text style={{ color: '#aaa', fontSize: 14 }}>W trakcie...</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#16161a', borderRadius: 99, paddingVertical: 8, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <MaterialCommunityIcons name="clock-outline" size={14} color="#d4ff3a" />
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{formatTime(seconds)}</Text>
                </View>
            </View>
        </ScrollView>
    );
}