-- Check if you are set as admin
SELECT id, email, full_name, is_admin 
FROM public.profiles 
WHERE email = 'adarshbalmuchu@gmail.com';
