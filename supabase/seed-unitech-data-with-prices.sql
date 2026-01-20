-- UNITECH INDIA Product Catalogue Seed Data with ACTUAL PRICES
-- This script populates the database with UNITECH's complete product range with realistic pricing

-- Clear existing data (optional - comment out if you want to preserve old data)
TRUNCATE TABLE public.products CASCADE;

-- 1. Tower Speakers (₹8,000 - ₹35,000)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('DHURANDHAR Tower Speaker', 'LED Display, Remote Control, Bass 10" (x2) subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'tower-speakers', 'UNITECH', 34999.00, 39999.00, 13, 4.5, 127, 15, true, true, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('DHOOM 2 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 4", Height 34"', 'tower-speakers', 'UNITECH', 28999.00, 32999.00, 12, 4.5, 98, 20, true, true, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('ROCKSTAR Tower Speaker', 'LED Display, Remote Control, Bass 10" subwoofer, Wire/Wireless Mic, Speaker 4", Height 34"', 'tower-speakers', 'UNITECH', 26499.00, 29999.00, 12, 4.5, 84, 18, true, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('9191 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 4", Height 27"', 'tower-speakers', 'UNITECH', 18999.00, 21999.00, 14, 4.0, 56, 25, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('8181 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 3", Height 20"', 'tower-speakers', 'UNITECH', 14999.00, 17999.00, 17, 4.0, 43, 30, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('DHOOM Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Karaoke Support, RGB Lights', 'tower-speakers', 'UNITECH', 24999.00, 27999.00, 11, 4.5, 91, 22, true, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('DRAGON Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'tower-speakers', 'UNITECH', 22999.00, 25999.00, 12, 4.5, 67, 19, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('8383 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Speaker 4", Height 22"', 'tower-speakers', 'UNITECH', 12999.00, 14999.00, 13, 4.0, 38, 28, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('8585 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 32"', 'tower-speakers', 'UNITECH', 19999.00, 22999.00, 13, 4.0, 52, 24, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('7474 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'tower-speakers', 'UNITECH', 21999.00, 24999.00, 12, 4.0, 48, 21, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('7575 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Speaker 4", Height 27"', 'tower-speakers', 'UNITECH', 16999.00, 19999.00, 15, 4.0, 41, 26, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('3232 PRO SERIES', 'LED Display, Remote Control, Bass 5.25" subwoofer, Crystal Clear Sound, RGB Lights', 'tower-speakers', 'UNITECH', 9999.00, 11999.00, 17, 4.5, 72, 35, false, true, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('3434 Tower Speaker', 'LED Display, Remote Control, Bass 5.25" subwoofer, Crystal Clear Sound, RGB Lights (multi-colour)', 'tower-speakers', 'UNITECH', 11999.00, 13999.00, 14, 4.5, 89, 32, false, true, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400');

-- 2. Home Theatre Systems (₹6,000 - ₹25,000)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('9494 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 8" Subwoofer', 'home-theatre-systems', 'UNITECH', 24999.00, 28999.00, 14, 4.5, 156, 12, true, true, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('8787 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'home-theatre-systems', 'UNITECH', 18999.00, 21999.00, 14, 4.5, 134, 18, true, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('6363 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'home-theatre-systems', 'UNITECH', 14999.00, 17999.00, 17, 4.0, 87, 22, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('8802 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'home-theatre-systems', 'UNITECH', 16999.00, 19999.00, 15, 4.5, 102, 20, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('8801 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'home-theatre-systems', 'UNITECH', 12999.00, 14999.00, 13, 4.0, 76, 28, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('5151 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 5.25" Subwoofer', 'home-theatre-systems', 'UNITECH', 11999.00, 13999.00, 14, 4.0, 64, 30, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('4747 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 8999.00, 10999.00, 18, 4.0, 58, 35, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('4949 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 9499.00, 11499.00, 17, 4.0, 51, 32, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('4848 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 8799.00, 10799.00, 19, 4.0, 47, 38, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('4393 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 7999.00, 9999.00, 20, 4.0, 42, 40, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('4383 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 7799.00, 9799.00, 20, 4.0, 39, 42, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('4353 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 7499.00, 9499.00, 21, 4.0, 36, 45, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('2383 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 5999.00, 7999.00, 25, 4.0, 31, 50, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('2353 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'home-theatre-systems', 'UNITECH', 5499.00, 7499.00, 27, 4.0, 28, 52, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400');

-- 3. Audio Amplifiers (₹3,500 - ₹18,000)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('4440 DIC AMP 1313', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 12999.00, 14999.00, 13, 4.5, 45, 15, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('4440 DIC AMP 1010', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 10999.00, 12999.00, 15, 4.5, 38, 18, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('4440 DIC AMP 1717', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 14999.00, 16999.00, 12, 4.5, 52, 12, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('4440 DIC AMP 2626', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 17999.00, 19999.00, 10, 4.5, 67, 10, true, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('4440 DIC AMP 1414', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 11999.00, 13999.00, 14, 4.5, 41, 16, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('4440 DIC AMP 1515', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 12499.00, 14499.00, 14, 4.5, 43, 14, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('4440 DIC AMP 2828', '4440 DIC Amplifier - Professional audio amplification', 'audio-amplifiers', 'UNITECH', 18999.00, 21999.00, 14, 4.5, 78, 8, true, true, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('Transistor AMP 8000', '8 Transistor 3055 - High power amplifier', 'audio-amplifiers', 'UNITECH', 8999.00, 10999.00, 18, 5.0, 91, 20, true, true, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('Transistor AMP 5000', '4 Transistor 3055 - Professional amplifier', 'audio-amplifiers', 'UNITECH', 5999.00, 7999.00, 25, 4.5, 62, 25, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('Transistor AMP 5500', '5 Transistor 3055 - Professional amplifier', 'audio-amplifiers', 'UNITECH', 6499.00, 8499.00, 24, 4.5, 58, 23, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('Sound Box UT-1525', '5" Speaker sound box - Portable audio solution', 'audio-amplifiers', 'UNITECH', 3999.00, 5999.00, 33, 4.0, 34, 45, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('Sound Box UT-1990', '8" Speaker sound box - Portable audio solution', 'audio-amplifiers', 'UNITECH', 4999.00, 6999.00, 29, 4.5, 47, 38, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400');

-- 4. DTH Receivers (₹1,200 - ₹4,500)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('Fiber Gold+ DTH', 'Free-to-air Digital Satellite Receiver with advanced features', 'dth-receivers', 'UNITECH', 4499.00, 5499.00, 18, 4.5, 234, 50, true, true, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('Gold+ Non BT DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 3499.00, 4499.00, 22, 4.5, 198, 60, true, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('Gold+ BT DTH', 'Free-to-air Digital Satellite Receiver with Bluetooth', 'dth-receivers', 'UNITECH', 3999.00, 4999.00, 20, 5.0, 287, 55, true, true, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('Premium Series DTH', 'Premium Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 2999.00, 3999.00, 25, 4.5, 176, 70, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('Tiger DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 2499.00, 3499.00, 29, 4.0, 145, 80, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('8015 DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 1999.00, 2999.00, 33, 4.0, 132, 90, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('902 DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 1799.00, 2799.00, 36, 4.0, 118, 95, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('Udaan DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 1599.00, 2599.00, 38, 4.0, 104, 100, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('Drone DTH', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 1499.00, 2499.00, 40, 4.0, 98, 105, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('DTH Boss', 'Free-to-air Digital Satellite Receiver', 'dth-receivers', 'UNITECH', 1899.00, 2899.00, 34, 4.5, 156, 85, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400');

-- 5. Car Stereo Systems (₹2,500 - ₹8,000)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('UT 007 Car Stereo', 'Class D Car Tape - 50+50W powerful audio', 'car-stereo-systems', 'UNITECH', 4999.00, 6499.00, 23, 4.5, 89, 30, true, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('UT 009 Car Stereo', 'Class D Car Tape - 100+100W powerful audio', 'car-stereo-systems', 'UNITECH', 7999.00, 9999.00, 20, 4.5, 124, 25, true, true, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('UT 012 IPL Car Stereo', 'IPL Eco Series - Advanced car audio system', 'car-stereo-systems', 'UNITECH', 6499.00, 7999.00, 19, 4.5, 76, 28, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('1340 Car Stereo', 'Premium car audio system', 'car-stereo-systems', 'UNITECH', 3999.00, 5499.00, 27, 4.0, 54, 35, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('3131 Car Stereo', 'High-quality car audio system', 'car-stereo-systems', 'UNITECH', 3499.00, 4999.00, 30, 4.0, 47, 38, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('3410 Tractor USB', 'Tractor USB audio system -   duty', 'car-stereo-systems', 'UNITECH', 2999.00, 4499.00, 33, 4.5, 62, 40, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400');

-- 6. Power Strips & Accessories (₹300 - ₹2,500)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('Transformer 12-0-12 1A', '12-0-12 / 0-12 : 1 AMP - Power transformer', 'power-strips', 'UNITECH', 799.00, 1199.00, 33, 4.0, 28, 100, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('Transformer 12-0-12 2A', '12-0-12 / 0-12 : 2 AMP - Power transformer', 'power-strips', 'UNITECH', 1299.00, 1799.00, 28, 4.5, 34, 85, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('Transformer 12-0-12 3A', '12-0-12 / 0-12 : 3 AMP - Power transformer', 'power-strips', 'UNITECH', 1699.00, 2299.00, 26, 4.5, 41, 75, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('Power Strip 6 Socket', '6 Socket surge protector power strip', 'power-strips', 'UNITECH', 599.00, 999.00, 40, 4.0, 156, 150, false, true, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('Power Strip 4 Socket', '4 Socket surge protector power strip', 'power-strips', 'UNITECH', 399.00, 799.00, 50, 4.0, 201, 200, false, true, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400');

-- 7. LED/DTH Stands (₹200 - ₹1,200)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('UT-999 DTH Stand', 'Metal DTH stand 10.5in x 8.5in - Premium build', 'speakers', 'UNITECH', 899.00, 1299.00, 31, 4.5, 67, 80, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'),
('UT-777 DTH Stand', 'Metal DTH stand 9in x 6.5in - Compact design', 'speakers', 'UNITECH', 699.00, 999.00, 30, 4.5, 54, 90, false, false, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('UT-X45 LED Stand', 'Metal LED stand - Universal mounting', 'speakers', 'UNITECH', 799.00, 1199.00, 33, 4.0, 43, 75, false, false, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('10 PRO LED Stand', 'Metal LED stand - Professional grade', 'speakers', 'UNITECH', 1099.00, 1599.00, 31, 4.5, 61, 65, false, false, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400'),
('UT-26DX LED Stand', 'Metal LED stand - Deluxe model', 'speakers', 'UNITECH', 1199.00, 1699.00, 29, 4.5, 58, 60, false, false, 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400'),
('UT-225 LED Stand', 'Metal LED stand - Standard mounting', 'speakers', 'UNITECH', 599.00, 999.00, 40, 4.0, 72, 95, false, false, 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400'),
('DTH Stand (Color)', 'DTH Stand - Available in multiple colors', 'speakers', 'UNITECH', 399.00, 799.00, 50, 4.0, 84, 120, false, false, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400');

-- 8. Hot Selling Products (Best Sellers)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending, image_url) VALUES
('UT 810 ULTRA SLIM 29" KIT', 'Toshiba UOC Kit - Ultra slim 29" model, complete solution', 'hot-selling-products', 'UNITECH', 5999.00, 7999.00, 25, 5.0, 189, 40, true, true, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
('UT 807 BU KIT', 'Toshiba UOC Kit - Complete solution for all your needs', 'hot-selling-products', 'UNITECH', 4999.00, 6999.00, 29, 4.5, 143, 45, true, true, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400'),
('UT 806 STR KIT', 'Toshiba UOC Kit - Professional grade equipment', 'hot-selling-products', 'UNITECH', 5499.00, 7499.00, 27, 4.5, 167, 42, true, true, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400');

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Successfully seeded % products with prices and images!', (SELECT COUNT(*) FROM public.products);
END $$;
