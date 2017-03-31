import scoreHorizontalStreak from './scoreHorizontalStreak';
import scoreVerticalStreak from './scoreVerticalStreak';


export default (grid, player) => {
  let s = [0, 0, 0, 0, 0, 0, 0];
  s = scoreHorizontalStreak(s, grid, player);
  s = scoreVerticalStreak(s, grid, player);
  // s = scoreDiagonalStreak(s, grid, player);
  return s;
};
