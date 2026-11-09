import { useEffect, useState } from 'react';

const useFetchPosts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return users;
};
export default useFetchPosts;
