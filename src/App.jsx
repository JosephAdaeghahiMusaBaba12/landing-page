import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"


const App = () => {
  return (
   <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
   </>
  )
}

export default App