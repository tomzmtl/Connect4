/* eslint-disable no-continue,no-loop-func */

import ownerSliceXY from './ownerSliceXY';


const colScore = (scores, x, score) => {
  const newScores = [
    ...scores,
  ];

  if (scores[x - 1] < score) {
    newScores[x - 1] = score;
  }

  return newScores;
};


export default (scores, grid, player) => {
  let s = Array.from(scores);
  const p = player;
  const op = p === 1 ? 2 : 1;

  [true, false].forEach((direction) => {
    for (let y = 3; y > 0; y -= 1) {
      for (let x = 1; x <= 4; x += 1) {
        const pattern = ownerSliceXY(grid, x, y, direction);


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
  });

  return s;
};
