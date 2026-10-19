import classnames from 'classnames';
import styles from './Image.module.css';

const Image = ({ imageSrc, altText, isAvatar }) => {
  const computedContainerClassName = classnames(styles.image, {
    [styles.avatar]: isAvatar,
  });

  return (
    <div className={computedContainerClassName}>
      <img src={imageSrc} alt={altText} />
    </div>
  );
};
export default Image;
