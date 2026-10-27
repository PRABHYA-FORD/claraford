import Box from '@mui/material/Box';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Channels from '@/components/sections/Channels';
import Platform from '@/components/sections/Platform';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Box component="main" id="main">
        <Hero />
        <Channels />
        <Platform />
        <Pricing />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
