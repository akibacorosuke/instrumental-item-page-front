import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="logo">Instrumental page</h1>
      <div className="header-genre">
        <ul>
          <li>
            <Link to={`/items/electric_guitar/`}>electric guitar</Link>
          </li>
          <li>
            <Link to={`/items/acoustic_guitar/`}>acoustic guitar</Link>
          </li>
          <li>
            <Link to={`/items/bass/`}>bass</Link>
          </li>
          <li>
            <Link to={`/items/effector/`}>effector</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
