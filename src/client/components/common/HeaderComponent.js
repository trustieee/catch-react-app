import React from 'react';
import { NavLink } from 'react-router-dom';

// the {' '} is a non-breaking space within jsx. Similar to '/' at end of lines in c++
function HeaderComponent() {
  const activeStyle = {
    color: 'orange'
  };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>
      {' | '}
      <NavLink activeStyle={activeStyle} to="/test-api">
        API
      </NavLink>
    </nav>
  );
}

export default HeaderComponent;
