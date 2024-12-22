export const getAIRecommendations = (userPreferences) => {
  // Mock AI recommendation logic
  const workouts = [
    { id: '1', title: 'Cardio Blast', duration: '30 mins', difficulty: 'Medium' },
    { id: '2', title: 'Strength Training', duration: '45 mins', difficulty: 'Hard' },
    { id: '3', title: 'Yoga for Relaxation', duration: '25 mins', difficulty: 'Easy' },
  ];

  // Filter recommendations based on user preferences
  return workouts.filter(
    (workout) => workout.difficulty === userPreferences.difficulty
  );
};
