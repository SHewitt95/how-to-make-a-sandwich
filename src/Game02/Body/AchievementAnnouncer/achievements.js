const achievements = [
  {
    taskCompleted: state => state.playerLevel >= 1,
    text: "Always good to have an extra set of hands. That's, what, 20 fingers?",
  },
  {
    taskCompleted: state => state.playerLevel >= 5,
    text: "Sure, why not 10 more hands? The more the merrier!",
  },
  {
    taskCompleted: state => state.playerLevel >= 10,
    text: "Okay buddy. 20 extra hands seem excessive.",
  },
  {
    taskCompleted: state => state.playerLevel >= 15,
    text: "You must really like making sandwiches, with those 30 extra hands.",
  },
  {
    taskCompleted: state => state.playerLevel >= 20,
    text: "Hello, police? There's a many-handed monster here. How many hands? 40 extra!",
  },
  {
    taskCompleted: state => state.playerLevel >= 50,
    text: "Ever read Frankenstein? Mary Shelley may have some thoughts on your 100 hands.",
  },
  {
    taskCompleted: state => state.playerLevel >= 100,
    text: "200 hands. Aight, imma head out.",
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
  {
    threshold: 7700000000,
    text: "You've done it: 7.7 Billion sandwiches. World Hunger is no more!"
  },
];

export default achievements;