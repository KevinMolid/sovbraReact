import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-24 py-6 items-center">
      <Link to="/">
        <img
          className="w-60"
          src="src\assets\logo_raw.png"
          alt="Sovnklinikken logo"
        />
      </Link>
      <nav>
        <ul className="flex gap-4 uppercase">
          <li>Søvnproblemer</li>
          <li>Behandling</li>
          <li>Priser</li>
          <li>Timebestilling</li>
          <li>Om oss</li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
