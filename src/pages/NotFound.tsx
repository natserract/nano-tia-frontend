import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <h2>Not found</h2>
      <p>Sorry, the page you visited does not exist.</p>

      <Link to="/">
        <button>Back Home</button>
      </Link>
    </>
  );
};
export default NotFound;
