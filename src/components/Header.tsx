const Header = () => {
  return (
    <header className="flex justify-between px-24 py-6 items-center">
      <img
        className="w-60"
        src="src\assets\logo_raw.png"
        alt="Sovnklinikken logo"
      />
      <nav>
        <ul className="flex gap-4 uppercase">
          <li>Søvnproblemer</li>
          <li>Behandling</li>
          <li>Priser</li>
          <li>Timebestilling</li>
          <li>Om oss</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
