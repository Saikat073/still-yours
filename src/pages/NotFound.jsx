import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page page--notfound">
      <h1>Page not found</h1>
      <p>The route you requested does not exist.</p>
      <Link to="/" className="button">
        Return Home
      </Link>
    </section>
  );
}

export default NotFound;
