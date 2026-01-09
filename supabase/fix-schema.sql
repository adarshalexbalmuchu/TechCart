-- Fix database schema to allow NULL prices (for "Price on Request" model)
ALTER TABLE public.products ALTER COLUMN price DROP NOT NULL;
ALTER TABLE public.products ALTER COLUMN original_price DROP NOT NULL;

-- Verify changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'products' AND column_name IN ('price', 'original_price');
