import Header from "./components/header/Header";
import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/newsletter/Newsletter";

const App = () => {
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

      <footer></footer>
    </>
  );
};

export default App;
