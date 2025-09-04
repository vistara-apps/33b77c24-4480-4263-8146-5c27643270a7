export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress: string;
  createdAt: Date;
}

export interface StampedContent {
  contentId: string;
  userId: string;
  contentHash: string;
  timestamp: Date;
  storageUrl: string;
  isRemixable: boolean;
  royaltySplit: number;
  contentType: 'text' | 'image' | 'video' | 'document';
  title?: string;
  description?: string;
}

export interface Remix {
  remixId: string;
  originalContentId: string;
  remixerUserId: string;
  remixedContentHash: string;
  timestamp: Date;
  storageUrl: string;
  revenueGenerated: number;
  payouts: RoyaltyPayout[];
}

export interface RoyaltyPayout {
  userId: string;
  amount: number;
  timestamp: Date;
  transactionHash: string;
}
