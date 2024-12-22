import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { getAIRecommendations } from '../services/aiRecommendationService';
import { fetchWorkouts } from '../services/workoutService';

export default function HomeScreen({ navigation }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const userPreferences = { difficulty: 'Medium' }; // Mock user preferences
    const aiRecs = getAIRecommendations(userPreferences);
    setRecommendations(aiRecs);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI-Recommended Workouts</Text>
      <FlatList
        data={recommendations}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>Duration: {item.duration}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('WorkoutDetail', { workout: item })}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginBottom: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
});

