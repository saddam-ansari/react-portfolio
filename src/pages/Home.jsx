import Hero from "../sections/Hero"
import About from "../sections/About";
import Skills from "../sections/Skills"
import Education from "../sections/Education";
import WhatIBringSection from "../sections/WhatIBring";
import Certifications from "../sections/Certifications";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBringSection />
      <Skills />
      <Education />
      <Certifications />
    </>
  );
}

export default Home;