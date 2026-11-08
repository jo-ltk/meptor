import MotionRoot from "@/components/MotionRoot";
import Nav from "@/components/Nav";
import WhatsAppFab from "@/components/WhatsAppFab";
import Overlays from "@/components/sections/Overlays";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import Ticker from "@/components/sections/Ticker";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionRoot>
      <Overlays />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <Insights />
        <Ticker />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionRoot>
  );
}
