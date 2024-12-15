import React from 'react';
import { View, Text } from 'react-native';

const WorkoutDetailScreen = ({ route }) => {
  const { workout } = route.params;

  return (
    <View>
      <Text>Workout Name: {workout.name}</Text>
      <Text>Duration: {workout.duration} mins</Text>
      <Text>Calories Burned: {workout.calories}</Text>
    </View>
  );
};

export default WorkoutDetailScreen;
