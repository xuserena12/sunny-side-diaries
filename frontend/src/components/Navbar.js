import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-cream">
      <div className="flex justify-end p-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/" className="text-brown text-2xl">Home</Link>
          </li>
          <li>
            <Link to="/myjournal" className="text-brown text-2xl">My Journal</Link>
          </li>
          <li className="text-brown text-2xl">
            <div className="inline-block bg-yellow pt-1 pb-1 pr-6 pl-6 rounded-3xl border-2 border-solid border-brown">
              Log Out
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
