export const SUPPORTED_CONTENT_TYPES = {
  text: ['text/plain', 'text/markdown'],
  image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  video: ['video/mp4', 'video/webm', 'video/quicktime'],
  document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
} as const;

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const MAX_TEXT_LENGTH = 10000; // characters

export const ROYALTY_LIMITS = {
  MIN: 1,
  MAX: 20,
  DEFAULT: 10,
} as const;

export const PINATA_CONFIG = {
  API_KEY: process.env.PINATA_API_KEY,
  SECRET_KEY: process.env.PINATA_SECRET_KEY,
  GATEWAY_URL: 'https://gateway.pinata.cloud/ipfs/',
} as const;

export const BASE_NETWORK = {
  CHAIN_ID: 8453,
  NAME: 'Base',
  RPC_URL: 'https://mainnet.base.org',
} as const;
