'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, Image, Percent } from 'lucide-react';
import { TimestampDisplay } from './TimestampDisplay';
import { RoyaltySettings } from './RoyaltySettings';

interface ContentInputFormProps {
  onClose: () => void;
}

export function ContentInputForm({ onClose }: ContentInputFormProps) {
  const [contentType, setContentType] = useState<'text' | 'media'>('text');
  const [content, setContent] = useState('');
  const [isRemixable, setIsRemixable] = useState(true);
  const [royaltySplit, setRoyaltySplit] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Stamp & Mint Content</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Content Type Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Content Type</label>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setContentType('text')}
                    className={`flex-1 p-4 rounded-lg border transition-all ${
                      contentType === 'text' 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border hover:border-muted'
                    }`}
                  >
                    <FileText className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Text</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContentType('media')}
                    className={`flex-1 p-4 rounded-lg border transition-all ${
                      contentType === 'media' 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border hover:border-muted'
                    }`}
                  >
                    <Image className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Media</div>
                  </button>
                </div>
              </div>

              {/* Content Input */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  {contentType === 'text' ? 'Your Content' : 'Upload Media'}
                </label>
                {contentType === 'text' ? (
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your original content here..."
                    className="input h-32 resize-none"
                    required
                  />
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted" />
                    <p className="text-muted">Drop files here or click to upload</p>
                    <p className="text-xs text-muted mt-1">Supports images, videos, and documents</p>
                  </div>
                )}
              </div>

              {/* Remixable Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Allow Remixes</label>
                  <button
                    type="button"
                    onClick={() => setIsRemixable(!isRemixable)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isRemixable ? 'bg-accent' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isRemixable ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {isRemixable && (
                  <RoyaltySettings
                    value={royaltySplit}
                    onChange={setRoyaltySplit}
                    variant="inline"
                  />
                )}
              </div>

              {/* Timestamp Preview */}
              <TimestampDisplay variant="large" />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || (!content && contentType === 'text')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Minting...</span>
                  </div>
                ) : (
                  'Stamp & Mint'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
