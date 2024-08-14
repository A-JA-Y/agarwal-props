import About from "./components/about";
import MyCarousel from "./components/carousel";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Service from "./components/services";

function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <Navbar />
        <MyCarousel />
        <About />
        <Service />
        <ContactUs/>
        <Footer />

      </div>
    </>
  );
}

export default App;
