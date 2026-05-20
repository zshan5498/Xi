import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LockScreen from './LockScreen';
import HomeScreen from './HomeScreen';
import DynamicIsland from './DynamicIsland';
import MusicPlayer from './MusicPlayer';
import ControlCenter from './ControlCenter';
import { ScreenState } from '../types';

interface PhoneFrameProps {
  showControlCenter: boolean;
}

export default function PhoneFrame({ showControlCenter }: PhoneFrameProps) {
  const [screen, setScreen] = useState<ScreenState>('lock');
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (isUnlocked && screen === 'lock') {
      setScreen('home');
    }
  }, [isUnlocked, screen]);
  
  return (
    <div className="relative w-[380px] h-[800px] max-w-[90vw] max-h-[90vh] rounded-[3.5rem] border-[10px] border-zinc-900 bg-black overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(255,255,255,0.1)] ring-1 ring-white/10 leading-normal">
      
      {/* Phone Wallpaper Ecosystem */}
      <div className={`absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden scale-105`}>
        {/* Dynamic Aurora Base */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, #1a1a2e 0%, #050505 100%)' }} />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 80%, #4a4a8c 0%, transparent 50%), radial-gradient(circle at 10% 90%, #2d1b4d 0%, transparent 40%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Abstract Fluid Texture */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-[2s]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: screen === 'lock' ? 'scale(1)' : 'scale(1.05)'
          }} 
        />

        {/* Smart Depth Blur based on screen */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-[20px] transition-all duration-[1s]" 
          style={{ backdropFilter: screen === 'home' ? 'blur(12px)' : (screen === 'lock' ? 'blur(0px)' : 'blur(40px)') }} 
        />
      </div>

      <DynamicIsland />

      {/* Screen Router */}
      <AnimatePresence mode="wait">
        {screen === 'lock' && <LockScreen onUnlock={() => setIsUnlocked(true)} />}
        {screen === 'home' && <HomeScreen onNavigate={setScreen} />}
        {screen === 'music' && <MusicPlayer onBack={() => setScreen('home')} />}
      </AnimatePresence>

      <AnimatePresence>
        {showControlCenter && <ControlCenter isVisible={true} />}
      </AnimatePresence>

      {/* Glossy Screen Overlay (simulates glass reflection) */}
      <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-black/40 mix-blend-overlay z-50" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-50 rounded-t-[3rem]" />
      
      {/* Side Glows */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-white/10 to-transparent blur-sm pointer-events-none z-50" />
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-white/5 to-transparent blur-sm pointer-events-none z-50" />

      {/* Home Indicator */}
      {screen !== 'lock' && (
        <motion.div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-[5px] bg-white/60 rounded-full cursor-pointer hover:bg-white transiton-colors z-50 backdrop-blur-md" 
          onClick={() => {
            setScreen('home');
            if (showControlCenter) {
               // A trick to hide control center if it's open, but we manage it from App.tsx. 
               // For now, dragging it down/up works.
            }
          }}
          whileHover={{ scaleY: 1.5 }}
          whileTap={{ scale: 0.9 }}
        />
      )}
    </div>
  );
}
