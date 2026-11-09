import ListItem from './components/ListItem';
import styles from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ items = [], onClick, isUser }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const title = isUser
          ? `${item.firstName} ${item.lastName}`
          : item.title;

        return (
          <ListItem
            key={item.id}
            onClick={onClick}
            image={item.image}
            firstName={item.firstName}
            lastName={item.lastName}
            id={item.id}
            isUser={isUser}
          >
            {title}
          </ListItem>
        );
      })}
    </ul>
  );
};
List.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  isUser: PropTypes.bool,
};
export default List;
