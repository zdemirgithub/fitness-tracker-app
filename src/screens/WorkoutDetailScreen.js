import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { markWorkoutComplete } from '../services/workoutService';

export default function WorkoutDetailScreen({ route, navigation }) {
  const { workout } = route.params;

  const handleComplete = () => {
    markWorkoutComplete(workout.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text>Duration: {workout.duration}</Text>
      <Text>Difficulty: {workout.difficulty || 'Not specified'}</Text>
      <Button title="Mark as Complete" onPress={handleComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
