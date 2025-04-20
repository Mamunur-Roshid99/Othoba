import { FaEnvelope, FaDownload } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <section className="bg-[#439DDF] text-white py-8">
      <div className="container w-[95%] lg:w-[97%] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-7 justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row md:gap-5 items-center gap-3 text-center md:text-left">
            <FaEnvelope className="text-5xl" />
            <div>
              <h3 className="text-lg md:text-xl font-medium uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm">
                Get all the latest information on Events, Sales and Offers.
              </p>
            </div>
          </div>

          {/* App Download Section */}
          <div className="flex flex-col items-center justify-center gap-3 md:gap-2  md:flex-row md:items-center text-center md:text-left">
            <div>
              <h3 className="text-lg font-medium uppercase">
                Download our new app today!
              </h3>
              <p className="text-sm lg:text-[13px]">
                Don’t miss our mobile-only offers and shop with Android Play.
              </p>
            </div>
            <button className="mt-3 md:mt-0 border border-white w-[35%] px-4 py-2 lg:w-[25%] rounded text-white flex items-center space-x-2 hover:bg-[#4381df] hover:text-white cursor-pointer duration-300 transition">
              <span>Download</span>
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
