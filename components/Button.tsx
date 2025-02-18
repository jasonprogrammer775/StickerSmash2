import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Make sure you have the following types installed
import type { PressableProps } from 'react-native';

// Define your button props interface
interface ButtonProps extends PressableProps {
  label: string;
  theme?: 'primary' | 'secondary';
  onPress: () => void;
}

// Your button component
export default function Button({ label, theme, onPress }: ButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, theme === 'primary' && styles.buttonPrimary]}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonPrimary: {
    backgroundColor: '#fff',
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});



