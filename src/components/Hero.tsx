import { SITE_CONFIG } from '../constants';
import { ArrowDown } from 'lucide-react';
import { MusicProfile } from './MusicProfile';

export const Hero = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center px-6 pt-24 pb-6">
      <div className="relative mb-12">
        <MusicProfile />
      </div>

      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light mb-4 whitespace-pre-line">
          {SITE_CONFIG.title}
        </p>
        {SITE_CONFIG.country && (
          <div className="flex justify-center mb-8">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/40">
              {SITE_CONFIG.country}
            </span >
          </div>
        )}
        <p className="text-base md:text-lg text-white/40 leading-relaxed mb-6 px-4">
          {SITE_CONFIG.bio}
        </p>
      </div>
    </section>
  );
};
