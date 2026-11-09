import { useState } from 'react';
import styles from './ListItem.module.css';
import Image from '@components/Image';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const ListItem = (properties) => {
  const {
    id,
    firstName,
    lastName,
    image,
    className,
    onClick,
    isUser,
    children,
  } = properties;
  const [isActive, setIsActive] = useState(false);
  const fullName = `${firstName} ${lastName}`;
  const computedClassNames = classnames(className, styles.item, {
    [styles.active]: isActive,
  });

  const handleClick = () => {
    setIsActive((previousIsActive) => !previousIsActive);
    onClick?.(id);
  };

  return (
    <li className={computedClassNames} onClick={handleClick}>
      {!!isUser && <Image isAvatar imageSrc={image} altText={fullName} />}
      {!!isUser && <Image isAvatar imageSrc={image} altText={fullName} />}
      {children}
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isUser: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ListItem;
