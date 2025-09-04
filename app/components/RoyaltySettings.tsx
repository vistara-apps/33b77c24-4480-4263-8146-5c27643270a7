'use client';

import { Percent } from 'lucide-react';

interface RoyaltySettingsProps {
  value: number;
  onChange: (value: number) => void;
  variant: 'modal' | 'inline';
}

export function RoyaltySettings({ value, onChange, variant }: RoyaltySettingsProps) {
  const containerClass = variant === 'modal' 
    ? 'bg-surface rounded-lg p-6 border border-border' 
    : '';

  return (
    <div className={containerClass}>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Percent className="w-4 h-4 text-accent" />
          <label className="text-sm font-medium">Royalty Split</label>
        </div>
        
        <div className="space-y-2">
          <input
            type="range"
            min="1"
            max="20"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-muted">
            <span>1%</span>
            <span className="text-accent font-medium">{value}%</span>
            <span>20%</span>
          </div>
        </div>
        
        <p className="text-xs text-muted">
          You'll earn {value}% royalties when others remix and monetize your content.
        </p>
      </div>
    </div>
  );
}
