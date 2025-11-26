import About from "./About/page";
import Banner from "./Banner/page";
import Expertise from "./Expertise/page";
import Faqs from "./Faq/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import PricingPlan from "./PricingPlans/page";
import Services from "./Services/page";
import Testimonial from "./Testimonials/page";

export default function Index() {
  return (
    <>
     <Hero/>
     <About/>
     <Paralex/>
     <Services/>
     <Expertise/>
     <PricingPlan/>
     <Testimonial/>
     <Faqs/>
     <Banner/>
    </>
  )
}

