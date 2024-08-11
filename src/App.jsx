import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Companies from "./Components/Companies/Companies";
import Products from "./Components/Products/Products";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="white-gradient">
        <Header />
        <Hero />
      </div>
      <section id="companies"><Companies /></section>
      <section id="products"><Products /></section>
      <section id="values"><Value /></section>
      <section id="contact"><Contact /></section>
      <section id="get-started"><GetStarted /></section>
      <Footer />
    </div>
  );
}

export default App;
