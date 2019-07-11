import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFoundComponent(props) {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default PageNotFoundComponent;
