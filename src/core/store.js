import initialState from './state';


const initializeState = () => {
  const stored = localStorage.getItem('game.save');

  if (stored) {
    return {
      ...JSON.parse(stored),
      ui: initialState.ui,
    };
  }

  return initialState;
};


export default initializeState();
