import React from 'react';
import { useTheme } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Toggle = () => {
  const theme = useTheme();
  return (
    <button onClick={theme.toggle}>
      {theme.light ? (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="lg" />
      )}
    </button>
  );
};

export default Toggle;
