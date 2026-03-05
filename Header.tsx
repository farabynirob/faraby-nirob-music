import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Twitter, Music } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
import { useAudio } from '../context/AudioContext';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isPlaying, isLoading, togglePlay } = useAudio();

  const navItems = [
    { name: 'Links', href: '#links' },
    { name: 'Tour', href: '#tour' },
    { name: 'Fan Pass', href: '#fan-pass' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3">
        <motion.button 
          onClick={togglePlay}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center w-10 h-10 rounded-xl glass-card border-white/20 shadow-lg shadow-black/20 overflow-hidden disabled:opacity-50"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                />
              </motion.div>
            ) : isPlaying ? (
              <motion.div
                key="waveform"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center gap-[2px] h-4"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [8, 16, 10, 14, 8],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                    className="w-[3px] bg-white rounded-full"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="music-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center"
              >
                <Music size={18} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tooltip */}
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            whileHover={{ opacity: 1, y: -5, scale: 1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase pointer-events-none whitespace-nowrap"
          >
            {isLoading ? 'Loading...' : isPlaying ? 'Playing' : 'Play Preview'}
          </motion.div>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass-card p-6 flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};
