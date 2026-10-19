import Image from '@components/Image';

const SelectedItem = ({ item }) => {
  if (!item) {
    return <h2>No item selected</h2>;
  }

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
