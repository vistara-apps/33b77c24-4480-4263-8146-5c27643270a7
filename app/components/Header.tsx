'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Stamp } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glassmorphism">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
            <Stamp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">ProofStamp</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary hover:text-accent transition-colors">Home</a>
          <a href="#" className="text-primary hover:text-accent transition-colors">Community</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
