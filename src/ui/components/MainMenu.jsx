import React, { PropTypes } from 'react';
import classnames from 'classnames';


const Component = ({ ui, onClose, onReset }) => {
  const classes = classnames({
    MainMenu: true,
    open: ui.menuOpen,
  });

  return (
    <div className={classes}>
      <button className="button new" onClick={onReset}>New game</button>
      <button className="button close" onClick={onClose}>
        <svg className="fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
};


Component.propTypes = {
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  ui: PropTypes.object,
};


export default Component;
