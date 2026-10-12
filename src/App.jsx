import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <footer></footer>
    </>
  );
};

export default App;
