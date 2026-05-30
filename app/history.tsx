import { View, Text } from 'react-native';
import { colors } from '../constans/colors';

export default function History() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.textPrimary }}>Historia</Text>
    </View>
  );
}
