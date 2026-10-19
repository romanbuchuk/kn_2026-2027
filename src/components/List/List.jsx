import ListItem from './components/ListItem';
import styles from './List.module.css';

const List = ({ items = [], onClick }) => {
  const handleClick = (id) => {
    onClick?.(id);

    // onClick && onClick();
    // if (onClick) {
    //   onClick();
    // }
  };

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          onClick={handleClick}
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
};
export default List;
