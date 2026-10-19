import { useState } from 'react';
import styles from './ListItem.module.css';
import Image from '@components/Image';
import classnames from 'classnames';

export const ListItem = (properties) => {
  const [isActive, setIsActive] = useState(false);
  const fullName = `${properties.firstName} ${properties.lastName}`;
  const computedClassNames = classnames(properties.className, styles.item, {
    [styles.active]: isActive,
  });

  const handleClick = () => {
    setIsActive((previousIsActive) => !previousIsActive);
    properties.onClick?.(properties.id);
  };

  return (
    <li className={computedClassNames} onClick={handleClick}>
      <Image isAvatar imageSrc={properties.image} altText={fullName} />
      {properties.children}
    </li>
  );
};
export default ListItem;
