import Header from "./_components/Header";
import Hero from "./_pages/Hero";
import Features from "./_pages/Features";
import Discover from "./_pages/Discover";
import About from "./_pages/About";
import OurSpaces from "./_pages/OurSpaces";
import Pricing from "./_pages/Pricing";
import FloorPlans from "./_pages/FloorPlans";
import ContactUs from "./_pages/ContactUs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Discover />
      <About />
      <OurSpaces />
      <Pricing />
      <FloorPlans />
      <ContactUs />
    </>
  );
}
