import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gradient-to-tr from-blue-gray-900   to-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* About Us Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-sm">
            We are a leading e-commerce platform providing a wide range of
            products to cater to all your needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "Shop", "Contact Us", "Privacy Policy"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=100049178316585" className="hover:text-blue-400">
              {/* Facebook Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/rajibroy8926/" className="hover:text-pink-400">
              {/* Instagram Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rajib-roy-888087304/" className="hover:text-blue-500">
              {/* LinkedIn Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a href="mailto:rajibroy89265@gmail.com" target="_blank" className="hover:text-gray-500">
              {/* Mail Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 10V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6l6.29 3.68a2 2 0 0 0 2.42 0L21 10z"></path>
                <path d="M3.91 12.08L3 12.6V20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7.4l-.91-.52-5.58 3.26a4 4 0 0 1-4.02 0L3.91 12.08z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">&copy; 2024 Rajib Roy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
