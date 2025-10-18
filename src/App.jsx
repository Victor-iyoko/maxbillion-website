import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Values from "./sections/Values"
import SectionInfo from "./components/SectionInfo"
import Vision from "./sections/Vision"
import About from "./sections/About"
import FutureDevelopments from "./sections/FutureDevelopments"
import CarouselInfo from "./sections/CarouselInfo"
import Services from "./sections/Services"
import GetStarted from "./sections/GetStarted"
import Certification from "./sections/Certification"
import ContactUs from "./sections/ContactUs"
import Testimonials from "./sections/Testimonials"
import Team from "./sections/Team"
import Footer from "./sections/Footer"
import data from "./data"
import Address from "./sections/Address"

function App() {
  
  return (
    <div className="px-4 md:px-8 pt-4 pb-4 md:pb-8 max-w-[1440px] mx-auto poppins-bold overflow-hidden">
      <Navbar />
      <Hero />
      <Values />
      <SectionInfo section={data.sectionInfo[0]} />
      <Vision />
      <SectionInfo section={data.sectionInfo[1]} />
      <About />
      <FutureDevelopments />
      <Services />
      <CarouselInfo />
      <GetStarted />
      <Certification />
      <ContactUs />
      <Address />
      <Testimonials />
      <Team />
      <Footer />
   </div>
  )
}

export default App
