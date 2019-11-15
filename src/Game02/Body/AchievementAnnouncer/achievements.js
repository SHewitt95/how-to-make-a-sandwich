const achievements = [
  {
    taskCompleted: state => state.playerLevel >= 1,
    text: "Oh, you made a friend! Let's name it Joel.",
  },
  {
    taskCompleted: state => state.playerLevel >= 5,
    text: "You've got quite a few friends now: 5!",
  },
  {
    taskCompleted: state => state.playerLevel >= 10,
    text: "You're so popular. 10 friends?!",
  },
  {
    taskCompleted: state => state.playerLevel >= 15,
    text: "15 friends, huh? Sometimes, I wish I had some...",
  },
  {
    taskCompleted: state => state.playerLevel >= 20,
    text: "20 friends. You have 20 friends. Okay.",
  },
  {
    taskCompleted: state => state.playerLevel >= 25,
    text: "You know what? I'm happy for you. You and your 25 friends.",
  },
  {
    taskCompleted: state => state.playerLevel >= 30,
    text: "Is it me? How I smell? I couldn't imagine having the 30 friends you have.",
  },
  {
    taskCompleted: state => state.playerLevel >= 35,
    text: "I mean, I'm just a stream of text. Why would 35 friends want to know a stream of text?",
  },
  {
    threshold: 10,
    text: '10 Sandwiches! Strong start.'
  },
  {
    threshold: 100,
    text: '100 Sandwiches! Getting there.'
  },
  {
    threshold: 1000,
    text: '1000 Sandwiches! Looking good, champ.'
  },
  {
    threshold: 10000,
    text: '10000 Sandwiches! Yep. Still going!'
  },
  {
    threshold: 100000,
    text: '100000 Sandwiches! Getting tired?'
  },
  {
    threshold: 1000000,
    text: '1 Million Sandwiches! The Big 7 Figures!'
  },
  {
    threshold: 10000000,
    text: "10 Million Sandwiches! If I had a dollar for every sandwich you've made..."
  },
  {
    threshold: 100000000,
    text: '100 Million Sandwiches! Good golly!'
  },
  {
    threshold: 1000000000,
    text: '1 Billion Sandwiches! Great. About 8 more of these to go.'
  },
  {
    threshold: 3850000000,
    text: '3.85 Billion Sandwiches! Halfway there!'
  },
];

export default achievements;