import BoxSection from "../components/BoxSection";
import HeaderSection from "../components/HeaderSection";
import Box from "../components/Box";
import CardSection from "../components/CardSection";
import ContactCard from "../components/ContactCard";

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
      <CardSection>
        <ContactCard
          name="Aleksander Andersen"
          mail="post@sovnklinikken.no"
          phone="940 82 429"
          img="https://www.sovnklinikken.no/wp-content/uploads/2024/04/sovnklinikken_portretter-1022557-Edit-1536x1024.jpg"
        />
        <ContactCard
          name="Laila Brogård"
          mail="post@sovnklinikken.no"
          phone="906 00 008"
          img="https://www.sovnklinikken.no/wp-content/uploads/2024/04/sovnklinikken_portretter-1022759-Edit-1536x1024.jpg"
        />
        <ContactCard
          name="Jakob Renaa Hafstad"
          mail="post@sovnklinikken.no"
          phone="936 64 128"
          img="https://www.sovnklinikken.no/wp-content/uploads/2024/04/sovnklinikken_portretter-1011904-Edit-1536x1024.jpg"
        />
      </CardSection>
    </main>
  );
};

export default Contact;
