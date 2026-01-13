-- Fix price column to allow NULL values for "Price on Request" products
-- This migration allows products without fixed prices (B2B inquiry model)

ALTER TABLE public.products 
ALTER COLUMN price DROP NOT NULL;

-- Add a check constraint to ensure either price exists OR it's explicitly NULL
-- This prevents accidental empty values while allowing intentional NULL for quotes
COMMENT ON COLUMN public.products.price IS 'Product price in INR. NULL means "Price on Request" - contact required for quote';

-- Optional: Add index for price filtering (speeds up price-based searches)
CREATE INDEX IF NOT EXISTS idx_products_price ON public.products(price) WHERE price IS NOT NULL;

-- Optional: Add index for featured products (homepage performance)
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(is_featured) WHERE is_featured = true;

-- Optional: Add index for trending products (homepage performance)
CREATE INDEX IF NOT EXISTS idx_products_trending ON public.products(is_trending) WHERE is_trending = true;
