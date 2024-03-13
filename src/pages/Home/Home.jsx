import Read from "../../components/read/Read"
import { Gallery } from "../../components/gallery/Gallery"
import Hero from "../../components/hero/Hero"
import CustomerSay from "../../components/CustomerSay/CustomerSay"
import Consultation from "../../components/consultation/Consultation"

const Home = () => {
  return (
    <>
    <Hero />
    <Gallery />
    <Read />
    <CustomerSay />
    <Consultation />
    </>
  )
}

export default Home