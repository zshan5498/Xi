import { useState } from 'react';
import { motion } from 'motion/react';
import { ScreenState } from './types';
import PhoneFrame from './components/PhoneFrame';
import ControlCenter from './components/ControlCenter';

export default function App() {
  const [showControlCenter, setShowControlCenter] = useState(false);

  return (
    <div className="min-h-screen bg-[#030305] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden font-sans selection:bg-white/30 text-white relative">
      {/* Ambient background glow for presentation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Container for the Phone and external controls (if needed) */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-display font-light tracking-[0.2em] uppercase text-white/80 mb-8 blur-[0.5px]">Luxora <span className="font-semibold text-white">UI</span></h1>
        
        <div className="relative group">
          <PhoneFrame showControlCenter={showControlCenter} />
          
          {/* Invisible trigger area at top right of phone for control center drag simulation */}
          <div 
            className="absolute top-0 right-8 w-24 h-12 z-50 cursor-grab active:cursor-grabbing"
            onPointerDown={() => setShowControlCenter(prev => !prev)}
          />
        </div>

        <p className="mt-8 text-white/40 text-sm tracking-wide font-light">Swipe down from top right to open Control Center</p>
      </div>
    </div>
  );
}
