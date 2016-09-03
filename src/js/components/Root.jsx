import React, { PropTypes } from 'react';
import Grid from './Grid';

const Root = ({ grid, data }) => (
  <div>
    <Grid grid={grid} data={data} />
  </div>
);

Root.propTypes = {
  data: PropTypes.array.isRequired,
  grid: PropTypes.object.isRequired,
};

export default Root;
