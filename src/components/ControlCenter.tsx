import { motion } from 'motion/react';
import { Wifi, Bluetooth, Plane, Moon, Volume2, Sun, Play } from 'lucide-react';

interface ControlCenterProps {
  isVisible: boolean;
}

export default function ControlCenter({ isVisible }: ControlCenterProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[40px] pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div 
        className="absolute top-14 left-4 right-4 pointer-events-auto"
        initial={{ y: -50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -50, scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Connectivity Group */}
          <div className="glass-panel rounded-3xl p-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Wifi size={20} />
              </div>
              <span className="text-[9px] text-white/70 uppercase tracking-widest">WLAN</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Bluetooth size={20} />
              </div>
              <span className="text-[9px] text-white/70 uppercase tracking-widest">Bluetooth</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80">
                <Plane size={20} />
              </div>
              <span className="text-[9px] text-white/70 uppercase tracking-widest">Flight</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80">
                <Moon size={20} />
              </div>
              <span className="text-[9px] text-white/70 uppercase tracking-widest">Focus</span>
            </div>
          </div>

          {/* Now Playing Mini */}
          <div className="glass-panel rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="p-4 h-full flex flex-col justify-between relative z-10">
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-medium">Audio</span>
                <div className="w-8 h-8 rounded-full border border-white/20 backdrop-blur flex items-center justify-center">
                  <Play size={10} fill="currentColor" className="text-white ml-0.5" />
                </div>
              </div>
              <div>
                <div className="text-sm font-light text-white line-clamp-1">Crystal Symphony</div>
                <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1">Luxora</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 glass-panel rounded-3xl flex flex-col justify-end p-4 relative group">
            <div className="absolute inset-0 bg-white/10 h-[60%] mt-auto rounded-3xl overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
            <Sun size={24} className="text-white/80 relative z-10 mb-2" />
          </div>
          <div className="h-40 glass-panel rounded-3xl flex flex-col justify-end p-4 relative group">
             <div className="absolute inset-0 bg-white/10 h-[40%] mt-auto rounded-3xl overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
            <Volume2 size={24} className="text-white/80 relative z-10 mb-2" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
