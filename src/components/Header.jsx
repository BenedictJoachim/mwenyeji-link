import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">MwenyejiLink</Link>
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/directory" className="mx-2 hover:underline">Directory</Link>
          <Link to="/events" className="mx-2">Events</Link>
          <Link to="/forums" className="mx-2">Forums</Link>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
