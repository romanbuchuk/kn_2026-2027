import { useEffect, useState } from 'react';

const useFetchUsers = (id) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return users;
};
export default useFetchUsers;
