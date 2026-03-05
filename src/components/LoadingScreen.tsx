import { motion } from 'motion/react';
import { SITE_CONFIG } from '../constants';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 p-1">
            <img 
              src={SITE_CONFIG.profilePic} 
              alt={SITE_CONFIG.name}
              className="w-full h-full object-cover rounded-full grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-4xl font-display font-bold tracking-[0.2em] uppercase mb-2">
            {SITE_CONFIG.name}
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="h-[1px] bg-white/20"
            />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              Loading Experience
            </span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="h-[1px] bg-white/20"
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -z-10 w-[300px] h-[300px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -z-10 w-[400px] h-[400px] border border-white/5 rounded-full"
        />
      </div>
    </motion.div>
  );
};
