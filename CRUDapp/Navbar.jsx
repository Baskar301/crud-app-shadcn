import { Button } from "../src/components/ui/button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-4 shadow-xl">
        <ul className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-center">
          <li className="text-xl md:text-2xl font-thin hover:text-gray-300 cursor-pointer transition-colors duration-300 ease-in-out">
            <Link to="/">User Management System</Link>
          </li>
          <Button asChild>
            <Link to="/adduser">Add User</Link>
          </Button>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
