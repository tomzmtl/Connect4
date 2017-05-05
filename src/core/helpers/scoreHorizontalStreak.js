/* eslint-disable no-continue,no-loop-func */

import ownerSliceX from './ownerSliceX';


const colScore = (scores, x, score) => {
  const newScores = [
    ...scores,
  ];

  if (scores[x - 1] < score) {
    newScores[x - 1] = score;
  }

  return newScores;
};


const l = (x, y, log) => {
  if (x === 4 && y === 6) {
    console.log(log);
  }
};


export default (scores, grid, player) => {
  let s = Array.from(scores);
  const p = player;
  const op = p === 1 ? 2 : 1;

  for (let y = 6; y > 0; y -= 1) {
    for (let x = 1; x <= 4; x += 1) {
      const pattern = ownerSliceX(grid, x, y);

      l(x, y, pattern);

      if (pattern.top.includes(false)) {
        continue;
      }

      if (pattern.top.includes(op)) {
        continue;
      }

      if (pattern.bottom.includes(false)) {
        continue;
      }

      const indexes = pattern.top.reduce((indx, v, i) => {
        if (v === null) {
          return indx.concat(x + i);
        }
        return indx;
      }, []);

      indexes.forEach((gx) => {
        s = colScore(s, gx, 4 - indexes.length);
      });
    }
  }

  return s;
};
