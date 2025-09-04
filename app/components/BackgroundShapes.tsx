'use client';

import { motion } from 'framer-motion';

export function BackgroundShapes() {
  const shapes = [
    { size: 80, x: '10%', y: '20%', delay: 0 },
    { size: 60, x: '80%', y: '15%', delay: 2 },
    { size: 100, x: '70%', y: '60%', delay: 4 },
    { size: 40, x: '15%', y: '70%', delay: 1 },
    { size: 120, x: '90%', y: '80%', delay: 3 },
    { size: 70, x: '50%', y: '90%', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, -10, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
