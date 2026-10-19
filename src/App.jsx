import List from './components/List';
import useFetchUsers from './hooks/api/useFetchUsers.js';
import SelectedItem from '@components/SelectedItem';
import { useState } from 'react';

function App() {
  const items = useFetchUsers();
  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (id) => {
    setSelectedItem(items[id]);
    console.log(items);
  };

  return (
    <div>
      <SelectedItem item={selectedItem} />
      <List items={items} onClick={handleItemClick} />

      <div>
        <button>Add new item</button>
      </div>
    </div>
  );
}

export default App;
