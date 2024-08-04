import HeaderCard from '../molecules/HeaderCard';
import ContentCard from '../molecules/ContentCard';

const CardComplete= ({ title, subtitle, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-purple-500 rounded-lg overflow-hidden shadow-lg">
      <HeaderCard title={title} subtitle={subtitle} />
      <ContentCard imageUrl={imageUrl} />
    </div>
  );
};

export default CardComplete;
