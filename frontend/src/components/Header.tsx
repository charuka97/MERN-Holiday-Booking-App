import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-6 bg-blue-800">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">HolidaysBooking.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex px-3 py-1.5 font-bold text-blue-600 bg-white item-center hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
