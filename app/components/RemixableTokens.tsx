'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, TrendingUp, Users } from 'lucide-react';
import { ContentInputForm } from './ContentInputForm';

export function RemixableTokens() {
  const [showForm, setShowForm] = useState(false);

  const tokens = [
    {
      id: 1,
      price: '$249.00',
      status: 'Last Minted Remix',
      earnings: '$4,298.30',
      holders: '1,112.65K',
      label: 'Only Top',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Remixable Tokens</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="bg-accent/20 p-2 rounded-lg hover:bg-accent/30 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      {showForm && (
        <ContentInputForm onClose={() => setShowForm(false)} />
      )}

      <div className="space-y-4">
        {tokens.map((token) => (
          <div key={token.id} className="bg-surface/50 rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                <div>
                  <div className="font-medium">{token.price}</div>
                  <div className="text-sm text-muted">{token.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted">Earnings</div>
                <div className="font-medium text-accent">{token.earnings}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-muted" />
                <span className="text-muted">{token.holders}</span>
              </div>
              <div className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">
                {token.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface/50 rounded-lg border border-border">
        <div className="text-sm text-muted mb-2">Content address</div>
        <div className="font-mono text-sm bg-bg/50 p-2 rounded border">
          0x2bf1...7bdc Bac2me
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-32 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded flex items-center justify-center">
            <div className="w-full bg-accent/30 h-1 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
