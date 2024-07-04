import LogoOnly from "../../assets/image.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={LogoOnly} alt="Nexcent Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold">Nexcent</span>
          </div>
          <p className="text-sm mb-4">&copy; 2020 Landify UI Kit. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-dribbble"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">About us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Pricing</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Testimonials</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Help center</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of service</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Legal</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Status</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
          <form className="flex flex-col md:flex-row">
            <input type="email" placeholder="Your email address" className="w-full md:w-3/4 p-2 rounded-l-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none mb-2 md:mb-0 md:mr-2" />
            <button className="bg-customGreen p-2 rounded-md hover:bg-green-700 md:rounded-l-none md:rounded-r-md">
              <i className="fas fa-paper-plane text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
