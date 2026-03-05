import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Download, Share2, ShieldCheck, Ticket, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const FanPass = () => {
  const [name, setName] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [serialNumber] = useState(`FN-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [memberSince] = useState(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
  const passRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsGenerated(true);
    }
  };

  return (
    <section id="fan-pass" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Digital Fan Pass</h2>
        <p className="text-white/40 max-w-md mx-auto">
          Claim your official digital fan pass and join the inner circle.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isGenerated ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/40 ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-lg focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <Ticket size={20} />
                  Generate My Pass
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="pass"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              {/* The Pass Card */}
              <div 
                ref={passRef}
                className="relative w-full max-w-sm aspect-[1.6/1] bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-white/5"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
                />

                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Official Fan Pass</h3>
                      <p className="text-lg font-display font-bold">{SITE_CONFIG.name}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <ShieldCheck size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Member Name</h4>
                      <p className="text-2xl font-display font-medium tracking-tight truncate">{name}</p>
                    </div>
                    <div className="flex gap-8">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Member Since</h4>
                        <p className="text-xs font-mono">{memberSince}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Status</h4>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <p className="text-xs font-bold uppercase tracking-tighter text-emerald-500">Verified</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end border-t border-white/10 pt-4">
                    <div className="font-mono text-[10px] text-white/20 tracking-tighter">
                      {serialNumber}
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <Sparkles size={10} />
                      <span className="text-[8px] font-bold uppercase tracking-widest">Inner Circle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center gap-2 transition-colors text-sm font-bold"
                >
                  <Download size={18} />
                  Save Pass
                </button>
                <button
                  onClick={() => setIsGenerated(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-2 transition-colors text-sm font-bold"
                >
                  Create New
                </button>
              </div>
              
              <p className="mt-6 text-xs text-white/20 italic">
                Screenshot your pass to share it on social media!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
