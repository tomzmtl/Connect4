import React, { PropTypes } from 'react';
import classnames from 'classnames';


const Component = ({ ui, onIconClick }) => {
  const classes = classnames({
    MainMenuSwitch: true,
    open: ui.menuOpen,
  });

  return (
    <div className={classes}>
      <button className="button" onClick={onIconClick}>
        Main menu
      </button>
    </div>
  );
};


Component.propTypes = {
  onIconClick: PropTypes.func,
  ui: PropTypes.object,
};


export default Component;
