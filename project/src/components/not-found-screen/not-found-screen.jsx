import React from 'react';
import {Link} from 'react-router-dom';


function NotFoundScreen() {
  return (
    <main>
      <section>
        <h1>Page not found. Error 404.</h1>
        <p>
          <Link to="/">Main page.</Link>
        </p>
      </section>
    </main>
  );
}


export default NotFoundScreen;
