import React from 'react';

export type ScreenState = 'lock' | 'home' | 'music' | 'settings' | 'gallery' | 'camera';

export interface AppIcon {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  screen?: ScreenState;
}
