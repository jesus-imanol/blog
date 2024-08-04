import Image from '../atoms/Image'

const ContentCard = ({ imageUrl }) => {
  return (
    <div className="relative">
      <Image src={imageUrl} alt="App Image" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default ContentCard;
