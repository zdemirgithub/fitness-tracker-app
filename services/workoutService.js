let workoutData = [
  { id: '1', title: 'Morning Yoga', duration: '30 mins', completed: false },
  { id: '2', title: 'HIIT Training', duration: '45 mins', completed: false },
];

export const fetchWorkouts = () => workoutData;

export const markWorkoutComplete = (workoutId) => {
  const workout = workoutData.find((w) => w.id === workoutId);
  if (workout) workout.completed = true;
  return workout;
};
