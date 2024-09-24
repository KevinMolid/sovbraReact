const Header = () => {
  return (
    <header className="flex justify-between px-24 py-6 items-baseline">
      <h1 className="font-medium text-2xl text-sky-500 uppercase">
        Søvnklinikken
      </h1>
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
