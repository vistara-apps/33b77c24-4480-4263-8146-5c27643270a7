'use client';

import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    { label: 'Stamped', value: '19,5500', subtitle: 'Documents' },
    { label: 'Earnings', value: '$9,756', subtitle: 'ETH 0.9' },
    { label: 'Proof Collected', value: '$249', subtitle: 'Verifications earned' },
    { label: 'Wallets', value: '585.6', subtitle: 'Connected' },
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6 text-center"
          >
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className="text-accent font-medium mb-1">{stat.label}</div>
            <div className="text-sm text-muted">{stat.subtitle}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
