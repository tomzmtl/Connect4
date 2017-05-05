import { cpuTurn } from '../../../core/actions/turn';


export default store => next => (action) => {
  const { game, players } = store.getState();

  if (action.type !== 'TURN.WAIT' || !players[game.player - 1].cpu) {
    return next(action);
  }

  if (game.winner || game.turn === 43) {
    return next(action);
  }

  return store.dispatch(cpuTurn());
};
