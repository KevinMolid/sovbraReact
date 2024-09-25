import BoxSection from "../components/BoxSection";
import HeaderSection from "../components/HeaderSection";
import Box from "../components/Box";

const Contact = () => {
  return (
    <main>
      <HeaderSection>Kontakt oss</HeaderSection>
      <BoxSection>
        <Box icon="envelope" heading="E-post">
          <p>post@sovnklinikken.no</p>
        </Box>
        <Box icon="phone" heading="Ring Oss" img="src\assets\adresse.jpg">
          <p>(+47) 22 60 18 00</p>
        </Box>
        <Box icon="clock" heading="Åpningstider">
          <ul>
            <li>Mandag: 09:00 - 17:00</li>
            <li>Tirsdag: 09:00 - 19:00</li>
            <li>Onsdag: 09:00 - 17:00</li>
            <li>Torsdag: 09:00 - 19:00</li>
            <li>Fredag: 08:00 - 16:00</li>
          </ul>
        </Box>
      </BoxSection>
    </main>
  );
};

export default Contact;
