import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-end p-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/journal" className="navbar-link">Journal</Link>
          </li>
          <li>
            <Link to="/history" className="navbar-link">History</Link>
          </li>
          <li>
            <Link to="/egg" className="navbar-link">Switch Egg</Link>
          </li>
          <li>
            <Link to="/signup" className="navbar-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
