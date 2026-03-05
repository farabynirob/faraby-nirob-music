import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialLinks } from './components/SocialLinks';
import { TourDates } from './components/TourDates';
import { FanPass } from './components/FanPass';
import { Footer } from './components/Footer';
import { AudioProvider } from './context/AudioContext';

export default function App() {
  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-black text-white">
        {/* Background Elements (Simplified) */}
        <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <Header />
        
        <main>
          <Hero />
          <SocialLinks />
          <TourDates />
          <FanPass />
        </main>

        <Footer />
      </div>
    </AudioProvider>
  );
}
