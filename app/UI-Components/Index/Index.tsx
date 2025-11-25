import About from "./About/page";
import Expertise from "./Expertise/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import PricingPlan from "./PricingPlans/page";

import Services from "./Services/page";

export default function Index() {
  return (
    <>
     <Hero/>
     <About/>
     <Paralex/>
     <Services/>
     <Expertise/>
     <PricingPlan/>
    </>
  )
}

