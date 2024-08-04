import Text from "../atoms/Text";

const HeaderCard = ({ title, subtitle }) => {
  return (
    <div className="p-4">
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-sm text-gray-500">{subtitle}</Text>
    </div>
  );
};

export default HeaderCard;
