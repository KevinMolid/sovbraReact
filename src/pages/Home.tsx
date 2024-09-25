import ArticleSection from "../components/ArticleSection";
import BoxSection from "../components/BoxSection";
import HeroSection from "../components/HeroSection";
import ReviewSection from "../components/ReviewSection";
import TextSection from "../components/TextSection";
import CtaSection from "../components/CtaSection";
import Box from "../components/Box";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <BoxSection>
        <Box icon="comments" heading="Kontakt oss">
          <p>
            <i className="fa-solid fa-phone"></i> (+47) 22 60 18 00
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> post@sovnklinikken.no
          </p>
        </Box>
        <Box
          icon="location-dot"
          heading="Vår adresse"
          img="src\assets\adresse.jpg"
        >
          <p>Vi holder til i Rådhusgata 20 i Oslo sentrum.</p>
          <Button>Se på kart</Button>
        </Box>
        <Box icon="calendar-days" heading="Timebestilling">
          <p>Se våre ledige timer.</p>
          <Button>Bestill time</Button>
        </Box>
      </BoxSection>
      <TextSection />
      <ReviewSection />
      <ArticleSection />
      <CtaSection />
    </main>
  );
};

export default Home;
