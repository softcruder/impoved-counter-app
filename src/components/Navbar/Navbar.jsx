import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//import Toggle from './Toggle'; // import the Toggle component
import './Navbar.css';

/**
 * A navbar component that displays a list of links to different routes
 * in the application, as well as a theme toggle button.
 */
const Navbar = () => {
  return (
    <nav>
      {/* Link to the home route */}
      <Link to="/">
        <h2 className="logo">Softcruder</h2>
      </Link>
      {/* Add the ThemeToggleButton component */}
  
      <div className="nav-link">
        <ul>
          {/* Link to the useReducer route */}
          <li>
            <NavLink to="reducer">Reducer</NavLink>
          </li>
          {/* Link to the custom hook route */}
          <li>
            <NavLink to="custom">Custom</NavLink>
          </li>
          {/* Link to the not-found route */}
          <li>
            <NavLink to="error">404</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
