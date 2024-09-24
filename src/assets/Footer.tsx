const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-4 p-24 bg-sky-400 text-white">
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">
            Søvnklinikken
          </h2>
          <p>En naturlig vei til bedre søvn.</p>
        </div>
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">Navigasjon</h2>
          <ul>
            <li>Behandling</li>
            <li>Priser</li>
            <li>Timebestilling</li>
            <li>Om oss</li>
            <li>Kontakt oss</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">
            Søvnproblemer
          </h2>
          <ul>
            <li>Søvnproblemer</li>
            <li>Søvnløshet</li>
            <li>Snorking og søvnapnè</li>
            <li>Søvnproblemer hos småbarn</li>
            <li>Parasomnier</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">Kontakt oss</h2>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i> (+47) 22 60 18 00
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> post@sovnklinikken.no
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Rådhusgata 20, 0151
              Oslo
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i> Facebook
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i> Instagram
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2 px-24 bg-sky-500 text-white flex justify-between">
        <p className="font-medium">© Søvnklinikken AS 2024</p>
        <p className="font-medium">Personvernerklering</p>
      </div>
    </footer>
  );
};

export default Footer;
