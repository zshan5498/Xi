import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Fingerprint, Navigation, Camera, Mic } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-40 flex flex-col items-center justify-between py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -50, opacity: 0, filter: 'blur(10px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Top Section - Clock & Date */}
      <div className="flex flex-col items-center mt-8 cursor-default w-full">
        <motion.div 
          className="text-7xl font-thin text-white leading-none tracking-tighter font-sans"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </motion.div>
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] text-white/50 tracking-[0.6em] uppercase mt-2 font-light"
        >
          {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </motion.div>
      </div>

      {/* Floating Notifications Area */}
      <motion.div 
        className="w-full flex-1 flex flex-col justify-end pb-12 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="w-full glass-panel rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
               <Navigation size={20} strokeWidth={1.5} className="text-black" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Luxora AI Assistant</p>
              <p className="text-white/60 text-xs mt-0.5">Environment optimized for focus.</p>
            </div>
          </div>
          <span className="text-white/40 text-[10px] tracking-widest uppercase">now</span>
        </div>
        
        <div className="w-full glass-panel rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors opacity-70 scale-95 origin-bottom">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
               <Mic size={20} strokeWidth={1.5} className="text-white/80" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Voice Memo</p>
              <p className="text-white/60 text-xs mt-0.5">Transcribing recent meeting...</p>
            </div>
          </div>
          <span className="text-white/40 text-[10px] tracking-widest uppercase">2m</span>
        </div>
      </motion.div>

      {/* Bottom Section - Unlock & Shortcuts */}
      <div className="w-full flex items-end justify-between px-2 pb-6">
        <motion.button 
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
          whileTap={{ scale: 0.9 }}
        >
          <Camera size={20} strokeWidth={1.5} className="text-white/80" />
        </motion.button>

        <motion.div 
          className="flex flex-col items-center gap-4 cursor-pointer group"
          onClick={onUnlock}
        >
          <motion.div 
            className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center relative overflow-hidden group-hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Fingerprint size={32} strokeWidth={1} className="text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </motion.div>
          <span className="text-white/50 text-[10px] font-medium tracking-widest uppercase">Tap to Unlock</span>
        </motion.div>

        <motion.button 
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
          whileTap={{ scale: 0.9 }}
        >
          <Mic size={20} strokeWidth={1.5} className="text-white/80" />
        </motion.button>
      </div>
    </motion.div>
  );
}
