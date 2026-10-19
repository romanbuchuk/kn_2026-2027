import List from './components/List';
import useFetchUsers from './hooks/api/useFetchUsers.js';
import SelectedItem from '@components/SelectedItem';

function App() {
  const items = useFetchUsers();

  const handleItemClick = (id) => {
    console.log('clicked', items[id]);
  };

  return (
    <div>
      <SelectedItem handleItemClick={handleItemClick} />
      <List items={items} handleItemClick={handleItemClick} />

      <div>
        <button>Add new item</button>
      </div>
    </div>
  );
}

export default App;
