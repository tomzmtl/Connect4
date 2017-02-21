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

// <svg className="svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none" />
//   <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="fill-primary" />
// </svg>

Component.propTypes = {
  onIconClick: PropTypes.func,
  ui: PropTypes.object,
};


export default Component;
