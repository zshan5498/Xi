import { motion } from 'motion/react';
import { ScreenState } from '../types';
import { Phone, MessageSquare, Compass, Play, CloudSun, Settings, Image as ImageIcon, Wallet, Calendar } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenState) => void;
}

const WIDGETS = [
  {
    id: 'weather',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex items-center justify-between w-full h-full p-4 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col">
          <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Paris, FR</span>
          <span className="text-4xl text-white font-extralight">18°</span>
          <span className="text-[10px] text-white/60 mt-1 italic">Partly Crystal Skies</span>
        </div>
        <CloudSun size={48} strokeWidth={1} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10 transition-transform group-hover:scale-110 duration-500" />
      </div>
    )
  },
  {
    id: 'calendar',
    colSpan: 1,
    rowSpan: 2,
    content: (
      <div className="flex flex-col p-4 h-full relative cursor-pointer group">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-0" />
        <Calendar size={24} strokeWidth={1.5} className="text-white relative z-10 mb-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        <div className="relative z-10 mt-4">
          <div className="text-white/90 text-[10px] uppercase font-light tracking-widest leading-tight">Design Sync</div>
          <div className="text-white/50 text-[10px] mt-1 font-medium">2:00 PM</div>
        </div>
      </div>
    )
  },
  {
    id: 'wallet',
    colSpan: 1,
    rowSpan: 1,
    content: (
      <div className="flex flex-col p-4 justify-between h-full relative cursor-pointer group text-right">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />
        <span className="text-[10px] text-white/40 uppercase tracking-widest relative z-10">Market</span>
        <div className="relative z-10">
           <span className="text-xl text-white font-extralight">$LXRA</span>
           <span className="text-[10px] text-emerald-400 font-medium block mt-1">+2.45%</span>
        </div>
      </div>
    )
  }
];

const APP_ICONS = [
  { id: 'camera', name: 'Camera', icon: <ImageIcon size={24} strokeWidth={1.5} />, color: 'from-fuchsia-500 to-purple-600' },
  { id: 'settings', name: 'Settings', icon: <Settings size={24} strokeWidth={1.5} />, color: 'from-gray-600 to-gray-800' },
  { id: 'music', name: 'Music', icon: <Play size={24} strokeWidth={1.5} />, color: 'from-rose-500 to-pink-600', route: 'music' as ScreenState },
  { id: 'gallery', name: 'Gallery', icon: <ImageIcon size={24} strokeWidth={1.5} />, color: 'from-cyan-400 to-blue-600' },
];

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <motion.div 
      className="absolute inset-0 z-30 pt-20 pb-8 px-6 flex flex-col justify-between"
      initial={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Widgets Grid */}
      <div className="grid grid-cols-2 gap-4 grid-rows-2">
        {WIDGETS.map((widget) => (
          <motion.div
            key={widget.id}
            className={`glass-panel rounded-[2rem] overflow-hidden ${widget.colSpan === 2 ? 'col-span-2' : 'col-span-1'} ${widget.rowSpan === 2 ? 'row-span-2' : 'row-span-1'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {widget.content}
          </motion.div>
        ))}
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-6 mt-8">
        {APP_ICONS.map((app, i) => (
          <motion.div 
            key={app.id}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 + 0.3, type: 'spring' }}
            onClick={() => app.route && onNavigate(app.route)}
          >
            <div className={`w-16 h-16 rounded-[22px] bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow`}>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-white relative z-10">{app.icon}</div>
            </div>
            <span className="text-[9px] text-white/60 tracking-widest uppercase">{app.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex-1" />

      {/* Dock (Bottom) */}
      <motion.div 
        className="w-full glass-panel-heavy rounded-[35px] h-[80px] flex justify-around items-center px-4 relative z-20 mb-2 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-[35px] pointer-events-none" />
        
        {[
          { icon: <Phone size={24} strokeWidth={1.5} className="text-black" />, customStyle: 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' },
          { icon: <MessageSquare size={24} strokeWidth={1.5} />, customStyle: 'border border-white/20 hover:bg-white/10' },
          { icon: <Compass size={24} strokeWidth={1.5} />, customStyle: 'border border-white/20 hover:bg-white/10' },
          { icon: <Play size={24} strokeWidth={1.5} />, customStyle: 'border border-white/20 hover:bg-white/10', route: 'music' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors relative group ${item.customStyle}`}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => item.route && onNavigate(item.route as ScreenState)}
          >
             {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
