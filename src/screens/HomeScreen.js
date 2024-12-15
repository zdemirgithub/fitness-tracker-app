import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const querySnapshot = await getDocs(collection(db, 'workouts'));
      const workoutData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWorkouts(workoutData);
    };
    fetchWorkouts();
  }, []);

  return (
    <View>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="View" onPress={() => navigation.navigate('WorkoutDetail', { workout: item })} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
