'use client';

import { AppShell } from './components/AppShell';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ContentSection } from './components/ContentSection';
import { BackgroundShapes } from './components/BackgroundShapes';

export default function HomePage() {
  return (
    <AppShell>
      <BackgroundShapes />
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ContentSection />
      </div>
    </AppShell>
  );
}
