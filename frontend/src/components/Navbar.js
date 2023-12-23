import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-end p-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/" className="navbar-link">Journal</Link>
          </li>
          <li>
            <Link to="/history" className="navbar-link">History</Link>
          </li>
          <li className="navbar-link"> Log Out</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
