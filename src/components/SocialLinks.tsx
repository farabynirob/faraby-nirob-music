import * as Icons from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const SpotifyIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.215.352-.674.463-1.026.248-2.85-1.742-6.438-2.136-10.663-1.171-.403.092-.808-.162-.9-.565-.092-.403.162-.808.565-.9 4.629-1.058 8.583-.61 11.776 1.342.352.215.463.674.248 1.026zm1.47-3.257c-.271.441-.849.581-1.29.31-3.262-2.004-8.235-2.587-12.092-1.417-.497.151-1.023-.129-1.174-.626-.151-.497.129-1.023.626-1.174 4.412-1.339 9.897-.688 13.62 1.601.441.271.581.849.31 1.29zm.126-3.4c-3.913-2.324-10.363-2.539-14.13-1.395-.6.182-1.237-.156-1.419-.756-.182-.6.156-1.237.756-1.419 4.329-1.314 11.45-1.058 15.96 1.62.54.32.716 1.014.396 1.554-.32.54-1.014.716-1.554.396z"/>
  </svg>
);

export const SocialLinks = () => {
  return (
    <section id="links" className="pt-6 pb-12 px-6 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">Connect</h2>
        <p className="text-white/40">Find me on other platforms</p>
      </div>
      
      <div className="space-y-4">
        {SITE_CONFIG.socialLinks.map((link, index) => {
          // @ts-ignore
          let IconComponent = Icons[link.icon as keyof typeof Icons] || Icons.Link;
          
          const isSpotify = link.name.toLowerCase() === 'spotify';

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 glass-card hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform"
                  style={{ color: link.color }}
                >
                  {isSpotify ? <SpotifyIcon size={24} /> : <IconComponent size={24} />}
                </div>
                <span className="font-medium text-lg">{link.name}</span>
              </div>
              <Icons.ArrowUpRight size={20} className="text-white/20 group-hover:text-white transition-colors" />
            </a>
          );
        })}

        {/* Contact Button */}
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center justify-between p-4 glass-card hover:bg-white/10 transition-all group border-white/20 bg-white/5"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-lg bg-white/10 group-hover:scale-110 transition-transform text-white">
              <Icons.Mail size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">Contact Me</span>
              <span className="text-xs text-white/40">{SITE_CONFIG.email}</span>
            </div>
          </div>
          <Icons.Send size={20} className="text-white/20 group-hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
};
