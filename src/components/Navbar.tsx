
import { Link } from "react-router-dom";
import { Users, UserPlus, Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-team-blue" />
            <span className="text-xl font-bold text-gray-800">Team Alpha</span>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-team-blue">
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link to="/add" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-team-blue">
                <UserPlus className="h-5 w-5 mr-1" />
                Add Member
              </Link>
              <Link to="/members" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-team-blue">
                <Users className="h-5 w-5 mr-1" />
                View Members
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
