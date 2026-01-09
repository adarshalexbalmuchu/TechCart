/**
 * Security utility functions for input validation and sanitization
 */

/**
 * Sanitize user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove potential script tags and dangerous characters
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .trim();
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Validate password strength
 */
export const validatePasswordStrength = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Sanitize SQL-like strings (for search queries)
 */
export const sanitizeSearchQuery = (query: string): string => {
  if (!query) return '';
  
  return query
    .replace(/[';"\-\\]/g, '') // Remove SQL injection characters
    .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/gi, '') // Remove SQL keywords
    .trim()
    .slice(0, 100); // Limit length
};

/**
 * Rate limiting helper (client-side basic implementation)
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  /**
   * Check if action is allowed
   * @param key - Unique identifier for the action
   * @param maxAttempts - Maximum attempts allowed
   * @param windowMs - Time window in milliseconds
   */
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }
  
  /**
   * Reset attempts for a key
   */
  reset(key: string): void {
    this.attempts.delete(key);
  }
}

/**
 * Validate URL to prevent open redirect attacks
 */
export const isValidRedirectUrl = (url: string, allowedDomains: string[]): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin);
    
    // Only allow relative URLs or URLs from allowed domains
    if (urlObj.origin === window.location.origin) {
      return true;
    }
    
    return allowedDomains.some(domain => urlObj.hostname.endsWith(domain));
  } catch {
    return false;
  }
};

/**
 * Encode HTML entities to prevent XSS
 */
export const encodeHTML = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

/**
 * Generate a secure random token
 */
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate price/amount to prevent manipulation
 */
export const validateAmount = (amount: number): boolean => {
  return (
    typeof amount === 'number' &&
    !isNaN(amount) &&
    isFinite(amount) &&
    amount >= 0 &&
    amount <= 10000000 // Max 1 crore
  );
};
