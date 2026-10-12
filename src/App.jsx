import Header from "./components/header/Header";
import Download from "./components/download/Download";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Download />
      </main>

      <footer></footer>
    </>
  );
};

export default App;
