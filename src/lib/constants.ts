/**
 * Application-wide constants and configuration
 */

// Security Configuration
export const SECURITY = {
  // Password requirements
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REQUIRE_UPPERCASE: true,
  PASSWORD_REQUIRE_LOWERCASE: true,
  PASSWORD_REQUIRE_NUMBER: true,
  PASSWORD_REQUIRE_SPECIAL: true,
  
  // Rate limiting
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_ATTEMPT_WINDOW: 15 * 60 * 1000, // 15 minutes
  MAX_SEARCH_REQUESTS: 20,
  SEARCH_WINDOW: 60 * 1000, // 1 minute
  
  // Session
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  
  // Input limits
  MAX_INPUT_LENGTH: 500,
  MAX_SEARCH_LENGTH: 100,
  MAX_COMMENT_LENGTH: 1000,
} as const;

// Allowed domains for redirects
export const ALLOWED_REDIRECT_DOMAINS = [
  'gzdudhvkohbuubgmhthe.supabase.co',
] as const;

// Content Security Policy
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'connect-src': ["'self'", 'https://gzdudhvkohbuubgmhthe.supabase.co'],
} as const;

// API Configuration
export const API = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Payment Configuration (for future use)
export const PAYMENT = {
  SUPPORTED_CURRENCIES: ['INR'] as const,
  MIN_AMOUNT: 1,
  MAX_AMOUNT: 10000000, // 1 crore
  DECIMAL_PLACES: 2,
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_WISHLIST: true,
  ENABLE_CART: true,
  ENABLE_REVIEWS: true,
  ENABLE_SOCIAL_LOGIN: false, // Enable when implementing OAuth
  ENABLE_TWO_FACTOR_AUTH: false, // Enable when implementing 2FA
} as const;
