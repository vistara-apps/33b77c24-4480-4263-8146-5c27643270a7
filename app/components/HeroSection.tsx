'use client';

import { motion } from 'framer-motion';
import { Stamp, Shield, Coins } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-accent bg-clip-text text-transparent">
          ProofStamp
        </h1>
        
        <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-7">
          Prove your ideas. Secure your content. Monetize your creativity with blockchain-verified timestamps and automated royalty splits.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4"
        >
          Start Stamping
        </motion.button>
        
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="flex items-center space-x-2 text-muted">
            <Shield className="w-5 h-5" />
            <span>Immutable Proof</span>
          </div>
          <div className="flex items-center space-x-2 text-muted">
            <Coins className="w-5 h-5" />
            <span>Automated Royalties</span>
          </div>
          <div className="flex items-center space-x-2 text-muted">
            <Stamp className="w-5 h-5" />
            <span>Instant Verification</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
