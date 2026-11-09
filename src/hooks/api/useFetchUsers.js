import { useEffect, useState } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
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
export default useFetchUsers;
