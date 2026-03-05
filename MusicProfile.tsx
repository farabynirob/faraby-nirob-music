import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
import { useAudio } from '../context/AudioContext';

export const MusicProfile = () => {
  const { isPlaying, isLoading, togglePlay } = useAudio();
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoading) togglePlay();
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      
      {/* Ambient Glow */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.05, 1],
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[32px] bg-white/10 blur-3xl -z-10"
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image Container */}
        <div className="relative">
          <motion.div
            animate={{ 
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-[180px] h-[180px] rounded-[24px] p-1 z-0"
          >
            <div className="w-full h-full rounded-[22px] overflow-hidden border border-white/10 relative">
              <img 
                src={SITE_CONFIG.profilePic} 
                alt={SITE_CONFIG.name}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isPlaying ? 'scale-110 brightness-50' : 'group-hover:brightness-75'}`}
                referrerPolicy="no-referrer"
              />

              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {(isHovered || isPlaying) && (
                    <motion.div
                      key={isPlaying ? 'pause' : 'play'}
                      initial={{ opacity: 0, scale: 0.8, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-white drop-shadow-2xl"
                    >
                      {isPlaying ? (
                        <Pause size={40} fill="currentColor" />
                      ) : (
                        <Play size={40} fill="currentColor" className="ml-1" />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Play Button */}
        <motion.button
          onClick={handleToggle}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={!isPlaying && !isLoading ? {
            y: [0, -4, 0],
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group/btn disabled:opacity-50"
        >
          <div className={`p-2 rounded-lg transition-colors ${isPlaying ? 'bg-white text-black' : 'bg-white/10 text-white group-hover/btn:bg-white group-hover/btn:text-black'}`}>
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-[18px] h-[18px] border-2 border-white/20 border-t-white rounded-full"
              />
            ) : isPlaying ? (
              <Pause size={18} fill="currentColor" />
            ) : (
              <Play size={18} fill="currentColor" className="ml-0.5" />
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
              {isLoading ? 'Loading' : isPlaying ? 'Listening' : 'Click to'}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest">
              {isLoading ? 'Please Wait' : isPlaying ? 'Pause' : 'Play Preview'}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
