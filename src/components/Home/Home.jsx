import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content-container">
          <h1>
            AltSchool Africa Second Semester Exam Project by{' '}
            <a
              className="home-link"
              href="https://softcruder.github.io"
              rel="noopener"
            >
              Softcruder
            </a>
          </h1>
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>
            <a
              className="home-features"
              href="https://react-vz5hgz.stackblitz.io/custom"
              rel="noopener"
            >
              Custom counter hook with increment, decrement, reset, setValue
              functions
            </a>
          </li>
          <li>
            <a
              className="home-features"
              href="https://react-vz5hgz.stackblitz.io/reducer"
              rel="noopener"
            >
              Combination of states with a useReducer that implements a counter
            </a>
          </li>
          <li>
            <a
              className="home-features"
              href="https://react-vz5hgz.stackblitz.io/error"
              rel="noopener"
            >
              A NotFound A.K.A 404 page
            </a>
          </li>
          <li>
            <a
              className="home-features"
              href="https://react-vz5hgz.stackblitz.io/check-error"
              rel="noopener"
            >
              Error boundary to handle errors and display a fallback UI
            </a>
          </li>
          <li>
            <a
              className="home-features"
              href="https://react-vz5hgz.stackblitz.io/"
              rel="noopener"
            >
              Good SEO practices
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
