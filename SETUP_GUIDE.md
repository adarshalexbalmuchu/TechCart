# TechCart Admin Setup Guide

## Quick Start

### 1. Access the Auth Page
Go to: https://adarshalexbalmuchu.github.io/TechCart/auth

### 2. Create Your Account
- Click on "Register / Sign Up"
- Enter your email and password
- Password must be at least 8 characters with uppercase, lowercase, number, and special character
- Confirm your email (check spam folder)

### 3. Set Up Admin Access

After creating your account, go to your Supabase dashboard and run this SQL:

```sql
-- Step 1: Apply the admin migration
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false;

-- Step 2: Find your user ID
SELECT id, email FROM auth.users;

-- Step 3: Make yourself admin (replace YOUR_EMAIL)
UPDATE public.profiles 
SET is_admin = true 
WHERE email = 'YOUR_EMAIL';

-- Step 4: Verify
SELECT email, is_admin FROM public.profiles WHERE is_admin = true;
```

### 4. Access Admin Panel
Once you're set as admin, go to:
https://adarshalexbalmuchu.github.io/TechCart/admin

## Troubleshooting

### Can't see Auth page?
- Clear browser cache
- Try incognito/private mode
- Check browser console (F12) for errors

### Profile not created automatically?
Run this in Supabase SQL Editor:
```sql
-- Get your user ID
SELECT id, email FROM auth.users WHERE email = 'YOUR_EMAIL';

-- Manually create profile (replace USER_ID)
INSERT INTO public.profiles (id, email, is_admin)
VALUES ('USER_ID', 'YOUR_EMAIL', true);
```

### Can't add products?
Make sure you're logged in and set as admin in the database.

## Admin Panel Features

- ✅ Add new products
- ✅ Edit existing products  
- ✅ Delete products
- ✅ Search and filter
- ✅ Set featured/trending status
- ✅ Manage stock and pricing

## Support

If you're still having issues:
1. Check that .env file has correct Supabase credentials
2. Verify migration was applied in Supabase
3. Confirm you're marked as admin in profiles table
4. Check browser console for specific error messages
