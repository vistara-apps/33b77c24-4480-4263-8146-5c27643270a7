'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RemixableTokens } from './RemixableTokens';
import { ContentProvenances } from './ContentProvenances';

export function ContentSection() {
  const [activeTab, setActiveTab] = useState('tokens');

  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Remixable Tokens */}
        <div className="lg:col-span-2">
          <RemixableTokens />
        </div>
        
        {/* Right Column - Content Provenances */}
        <div>
          <ContentProvenances />
        </div>
      </div>
    </section>
  );
}
