import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import achievements from './achievements';
import Context from '../../data/context';
import { MAX_NUMBER } from '../../data/_utils/constants';

const createAchievementList = (sandwichCount, state) => {
  return achievements.map(achievement => {
    if (achievement.threshold && achievement.threshold > sandwichCount) return null;
    if (achievement.taskCompleted && !achievement.taskCompleted(state)) return null;
    return (
      <li key={achievement.text}><Typography variant="body1" gutterBottom>{achievement.text}</Typography></li>
    );
  });
}

const AchievementAnnouncer = () => {
  const [state] = useContext(Context);
  const { peopleCount } = state;
  const sandwichCount = MAX_NUMBER - peopleCount;

  return (
    <section>
      <h2>Achievements</h2>
      <p>Here's a running list of what you've achieved so far.</p>
      <ul>
        {createAchievementList(sandwichCount, state)}
      </ul>
    </section>
  );
}

export default AchievementAnnouncer;