import { BoxIconElement } from "boxicons";

const ProfileCard = () => {
  return (
    <>
      <div className="my-28 max-w-4xl mx-auto w-full md:w-[60%]">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="bg-[#B7AB8D] p-6 rounded-lg shadow-lg w-full md:w-3/4 h-auto md:h-[40vh] grid-flow-col gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4 font-sans">
                Hello, I'm Jesús, a front-end developer passionate about creating attractive and functional interfaces.
              </h1>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                I care a lot about using design for positive impact and enjoy creating user-centric, delightful, and human experiences.
              </p>
            </div>
            <div className="flex space-x-8 items-center">
              <button className="bg-black text-white py-2 px-4 rounded-lg">Contact me</button>
              <a href="https://www.facebook.com/profile.php?id=61555328035149"><box-icon type='logo' name='facebook-circle'></box-icon></a>
              <a href="https://github.com/jesus-imanol/"><box-icon type='logo' name='github'></box-icon></a>
              <a href="https://www.instagram.com/chuysscc/"><box-icon type='logo' name='instagram'></box-icon></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 bg-[#B7AB8D] rounded-lg shadow-lg h-auto md:h-[40vh] flex items-center justify-center">
            <img src="image.png" alt="Jesus" className="w-1/2 h-1/2 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
