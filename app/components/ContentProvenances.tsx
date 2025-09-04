'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Clock, Award, Coins, Hash } from 'lucide-react';

export function ContentProvenances() {
  const provenances = [
    {
      icon: Shield,
      title: 'Content Provenances',
      description: 'Explore fully peer-reviewed files verified securely and have your content form.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
    },
    {
      icon: FileText,
      title: 'Full Content Correlations',
      description: 'Powerful fully live Policies',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
    },
    {
      icon: Clock,
      title: 'Online Batch Provenance',
      description: '',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
    },
    {
      icon: Award,
      title: 'First Received Storage',
      description: '',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
    },
    {
      icon: Coins,
      title: 'Labeled Export Contract Tokens',
      description: '',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
    },
    {
      icon: Hash,
      title: 'Only Recently',
      description: '',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">😊</span>
        </div>
        <h2 className="text-xl font-bold">Content Provenances</h2>
      </div>

      <div className="space-y-4">
        {provenances.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-surface/30 transition-colors cursor-pointer"
          >
            <div className={`${item.bgColor} p-2 rounded-lg`}>
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1">{item.title}</div>
              {item.description && (
                <div className="text-xs text-muted leading-4">{item.description}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
