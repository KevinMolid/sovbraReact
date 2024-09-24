import ArticleSection from "../components/ArticleSection";
import BoxSection from "../components/BoxSection";
import HeroSection from "../components/HeroSection";
import ReviewSection from "../components/ReviewSection";
import TextSection from "../components/TextSection";
import CtaSection from "../components/CtaSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <BoxSection />
      <TextSection />
      <ReviewSection />
      <ArticleSection />
      <CtaSection />
    </main>
  );
};

export default Home;
