import React, { useContext } from 'react';
import achievements from './achievements';
import Context from '../../data/context';
import { MAX_NUMBER } from '../../data/_utils/constants';

const createAchievementList = (sandwichCount, state) => {
  return achievements.map(achievement => {
    if (achievement.threshold && achievement.threshold > sandwichCount) return null;
    if (achievement.taskCompleted && !achievement.taskCompleted(state)) return null;
    return (
      <li>{achievement.text}</li>
    );
  });
}

const AchievementAnnouncer = () => {
  const [state] = useContext(Context);
  const { peopleCount } = state;
  const sandwichCount = MAX_NUMBER - peopleCount;

  return (
    <ul>
      {createAchievementList(sandwichCount, state)}
    </ul>
  );
}

export default AchievementAnnouncer;