import List from '@components/List/index.js';
import { useState } from 'react';
import useFetchPosts from '@hooks/api/useFetchPosts.js';
import useCreatePost from '@hooks/api/useCreatePost.js';

const Posts = () => {
  const createPost = useCreatePost();
  const items = useFetchPosts();

  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (id) => {
    setSelectedItem(items[id]);
    console.log(items);
  };

  return (
    <>
      <List items={items} onClick={handleItemClick} />
      <div>
        <button onClick={() => createPost({ title: 'New Post', userId: 5 })}>
          Add new item
        </button>
      </div>
    </>
  );
};

export default Posts;
