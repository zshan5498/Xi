import { motion } from 'motion/react';
import { ScreenState } from '../types';
import { ChevronLeft, Play, Pause, SkipForward, SkipBack, Heart, Shuffle, Repeat } from 'lucide-react';
import { useState } from 'react';

interface MusicPlayerProps {
  onBack: () => void;
}

export default function MusicPlayer({ onBack }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.div 
      className="absolute inset-0 z-40 bg-zinc-950/80 backdrop-blur-3xl flex flex-col pt-14 pb-8"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 mb-8">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/80"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <span className="text-xs uppercase tracking-widest font-medium text-white/50">Now Playing</span>
        <div className="w-10 h-10" /> {/* Spacer */}
      </div>

      {/* Album Art (Glossy 3D effect) */}
      <div className="px-8 mb-10 w-full aspect-square relative perspective-1000">
        <motion.div 
          className="w-full h-full rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-indigo-500/20 glass-panel-heavy p-2"
          initial={{ rotateY: 10, rotateX: 10, scale: 0.9 }}
          animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop" 
            alt="Album Art" 
            className="w-full h-full object-cover rounded-[2rem]"
          />
          <div className="absolute inset-0 rounded-[2rem] border border-white/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay rounded-[2.5rem]" />
        </motion.div>
      </div>

      {/* Song Info */}
      <div className="px-8 flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.h2 
              className="text-2xl font-serif font-semibold text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Crystal Symphony
            </motion.h2>
            <motion.p 
              className="text-white/60 font-medium text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Luxora Audio Ensemble
            </motion.p>
          </div>
          <motion.button 
             whileTap={{ scale: 0.8 }}
             className="text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
          >
            <Heart size={28} fill="currentColor" />
          </motion.button>
        </div>

        {/* Scrubber */}
        <div className="mb-10 w-full">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative cursor-pointer">
            <motion.div 
               className="absolute top-0 left-0 bottom-0 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
               initial={{ width: '0%' }}
               animate={{ width: '45%' }}
               transition={{ duration: 1, ease: 'linear' }}
            />
          </div>
          <div className="flex justify-between text-white/40 text-xs mt-2 font-medium font-mono">
            <span>1:24</span>
            <span>3:10</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <button className="text-white/40 hover:text-white/80 transition-colors">
            <Shuffle size={20} />
          </button>
          
          <div className="flex items-center gap-6">
            <motion.button whileTap={{ scale: 0.8 }} className="text-white/80 hover:text-white transition-colors">
              <SkipBack size={32} fill="currentColor" />
            </motion.button>
            
            <motion.button 
              className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </motion.button>
            
            <motion.button whileTap={{ scale: 0.8 }} className="text-white/80 hover:text-white transition-colors">
              <SkipForward size={32} fill="currentColor" />
            </motion.button>
          </div>

          <button className="text-white/40 hover:text-white/80 transition-colors">
            <Repeat size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
