import { Link } from 'react-router';

const Main = () => {
  return (
    <>
      <Link to="/posts">Go to Posts</Link>
      <a href="/posts">Fetch Posts</a>
      <div>The main page</div>
    </>
  );
};

export default Main;
