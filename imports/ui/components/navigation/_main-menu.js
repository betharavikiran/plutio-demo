import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => (
  <div id="main-menu">
    <div className="container">
      <div className="menu-list">
        <Link activeClassName="active" to="/">Task</Link>
        <Link to={'/submit-data'} >Submit Data</Link>
        <Link to={'/submit-data-uniforms'} >Submit Data(Uniforms)</Link>
      </div>
    </div>
  </div>
);

export default MainMenu;
