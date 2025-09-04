'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimestampDisplayProps {
  variant: 'large' | 'small';
  timestamp?: Date;
}

export function TimestampDisplay({ variant, timestamp }: TimestampDisplayProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const displayTime = timestamp || currentTime;
  const formattedTime = displayTime.toLocaleString();
  const iso8601Time = displayTime.toISOString();

  if (variant === 'large') {
    return (
      <div className="bg-surface/50 rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium">Timestamp Preview</span>
        </div>
        <div className="font-mono text-lg text-accent">{formattedTime}</div>
        <div className="text-xs text-muted mt-1">
          ISO 8601: {iso8601Time}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-sm text-muted">
      <Clock className="w-4 h-4" />
      <span>{formattedTime}</span>
    </div>
  );
}
