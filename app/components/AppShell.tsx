'use client';

import { ReactNode } from 'react';
import { Header } from './Header';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4">
        {children}
      </main>
    </div>
  );
}
