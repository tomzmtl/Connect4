import React, { PropTypes } from 'react';
import classnames from 'classnames';


const Component = ({ ui, onClose, onReset }) => {
  const classes = classnames({
    MainMenu: true,
    open: ui.menuOpen,
  });

  return (
    <div className={classes}>
      <div className="menu">
        <button className="button new" onClick={onReset}>New game</button>
        {/* <button className="button players">Edit players</button>*/}
        <button className="button close" onClick={onClose}>Close menu</button>
      </div>
    </div>
  );
};


Component.propTypes = {
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  ui: PropTypes.object,
};


export default Component;
