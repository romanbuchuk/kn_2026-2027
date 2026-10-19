import Image from '@components/Image';

const SelectedItem = ({ item }) => {
  return (
    <div>
      <Image
        imageSrc={item.image}
        altText={`${item.firstName} ${item.lastName}`}
      />
    </div>
  );
};
export default SelectedItem;
