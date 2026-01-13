-- Script to make a user an admin
-- Replace 'user-email@example.com' with the actual email address

-- Option 1: Make user admin by email
UPDATE public.profiles
SET is_admin = true
WHERE email = 'adarshbalmuchu@gmail.com';

-- Option 2: Make user admin by user ID
-- UPDATE public.profiles
-- SET is_admin = true
-- WHERE id = 'user-uuid-here';

-- Verify the change
SELECT id, email, full_name, is_admin
FROM public.profiles
WHERE is_admin = true;
