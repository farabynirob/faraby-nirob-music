import { SITE_CONFIG } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-sm text-white/20 flex items-center space-x-2">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
          {SITE_CONFIG.country && (
            <>
              <span className="opacity-30">•</span>
              <span>{SITE_CONFIG.country}</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
