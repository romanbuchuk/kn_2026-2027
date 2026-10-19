import { useEffect, useState } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  return users;
};
export default useFetchUsers;
