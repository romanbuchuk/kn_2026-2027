import ListItem from './components/ListItem';
import styles from './List.module.css';

const List = ({ items = [], onClick }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <ListItem
        key={item.id}
        onClick={onClick}
        image={item.image}
        firstName={item.firstName}
        lastName={item.lastName}
        id={item.id}
      >
        {item.firstName} - {item.lastName}
      </ListItem>
    ))}
  </ul>
);
export default List;
