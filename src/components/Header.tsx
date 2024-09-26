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
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/sovnproblemer">Søvnproblemer</Link>
          </li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/behandling">Behandling</Link>
          </li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/priser">Priser</Link>
          </li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/timebestilling">Timebestilling</Link>
          </li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/omoss">Om oss</Link>
          </li>
          <li className="hover:-translate-y-2 transition-all transition-1000">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
