import ProfileCard from '../components/molecules/ProfileCard';
import Header from '../components/organisms/Header';

const Home = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
      <Header />
      </div>
      <div className="gap-6 flex flex-col items-center justify-center pt-20">
        <ProfileCard />
      </div>
    </>
  );
};

export default Home;
