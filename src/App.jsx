import Header from "./components/header/Header";
import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import FeatureModal from "./components/modal/FeatureModal";
import Newsletter from "./components/newsletter/Newsletter";
import { useModalTriggers } from "./hooks/useModalTriggers";

const MODAL_DELAY_MS = 30000;

const App = () => {
  const [isModalOpen, closeModal] = useModalTriggers(MODAL_DELAY_MS);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Download />
        <Faq />
        <Newsletter />
      </main>

      <Footer />

      <FeatureModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default App;
