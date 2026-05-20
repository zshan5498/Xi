import { motion } from 'motion/react';
import { Battery, Wifi, Signal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DynamicIsland() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-10 z-50 flex items-center justify-between px-8 pt-4 pointer-events-none text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
      {/* Time */}
      <span>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>

      {/* Pill/Island */}
      <motion.div 
        className="h-6 px-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/80 scale-90 pointer-events-auto"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
        <span className="text-[9px] tracking-widest text-white/80 capitalize normal-case">AI Sync</span>
      </motion.div>

      {/* Right Icons */}
      <div className="flex items-center gap-1.5 text-white/80">
        <Signal size={14} strokeWidth={1.5} />
        <Wifi size={14} strokeWidth={1.5} />
        <Battery size={16} strokeWidth={1.5} />
      </div>
    </div>
  );
}
