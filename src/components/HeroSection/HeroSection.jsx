import React from 'react'

import heroImg from '../../assets/hero.png'

const HeroSection = () => {
  return (
    <section className="mb-7">
      <div className="container w-[95%] lg:w-[97%] mx-auto flex flex-col items-center justify-center gap-5 border-b border-b-gray-200 py-9">
        {/*  */}
        <div>
          <img
            src={heroImg}
            alt="heroimg"
            className="h-36 md:h-64 rounded-xl"
          />
        </div>
        {/*  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-3">
          {/* img1 */}
          <div>
            <img
              src="https://images.othoba.com/images/thumbs/0737456_1-to-99-Parent-Block_400.jpeg"
              alt="heroimg"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* img2 */}
          <div>
            <img
              src="https://images.othoba.com/images/thumbs/0737461_100-to-199_400.jpeg"
              alt="heroimg"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* img3 */}
          <div>
            <img
              src="https://images.othoba.com/images/thumbs/0737462_200-to-499_400.jpeg"
              alt="heroimg"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* img4 */}
          <div>
            <img
              src="https://images.othoba.com/images/thumbs/0737470_500-to-999-Parent-Block_400.jpeg"
              alt="heroimg"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
