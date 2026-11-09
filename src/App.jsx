import List from './components/List';
import useFetchPosts from '@hooks/api/useFetchPosts.js';
import SelectedItem from '@components/SelectedItem';
import { useState } from 'react';
import useCreatePost from '@hooks/api/useCreatePost.js';

function App() {
  const items = useFetchPosts();
  const [selectedItem, setSelectedItem] = useState();
  const createUser = useCreatePost();

  const handleItemClick = (id) => {
    setSelectedItem(items[id]);
    console.log(items);
  };

  return (
    <div>
      <SelectedItem item={selectedItem} />
      <List items={items} onClick={handleItemClick} />

      <div>
        <button onClick={() => createUser({ title: 'New Post', userId: 5 })}>
          Add new item
        </button>
      </div>
    </div>
  );
}

export default App;
