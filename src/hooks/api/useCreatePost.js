import { useEffect, useState } from 'react';

const useCreatePost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [post]);

  return (postBody) => {
    setPost(postBody);
  };
};
export default useCreatePost;
