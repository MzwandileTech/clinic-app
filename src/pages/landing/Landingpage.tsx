import Header from "../../components/landingComponents/Header"
import Hero from "../../components/landingComponents/Hero"
import Features from "../../components/landingComponents/Features"
import Roles from "../../components/landingComponents/Screenshots"
import Screenshots from "../../components/landingComponents/Screenshots"
import Pricing from "../../components/landingComponents/Pricing"
import Testimonials from "../../components/landingComponents/Testimonials"
import CTA from "../../components/landingComponents/CTA";
import Footer from "../../components/landingComponents/Footer";

const Landingpage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Roles />
        
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Landingpage
