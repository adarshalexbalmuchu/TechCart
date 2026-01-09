-- UNITECH INDIA Product Catalogue Seed Data
-- This script populates the database with UNITECH's complete product range

-- Clear existing data (optional - comment out if you want to preserve old data)
TRUNCATE TABLE public.products CASCADE;

-- Insert Categories (with hierarchy)
-- Parent categories will be used for navigation

-- 1. Tower Speakers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('DHURANDHAR Tower Speaker', 'LED Display, Remote Control, Bass 10" (x2) subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('DHOOM 2 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 4", Height 34"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('ROCKSTAR Tower Speaker', 'LED Display, Remote Control, Bass 10" subwoofer, Wire/Wireless Mic, Speaker 4", Height 34"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('9191 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 4", Height 27"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('8181 Tower Speaker', 'LED Display, Remote Control, Bass 8" (x2), Wire/Wireless Mic, Speaker 3", Height 20"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('DHOOM Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Karaoke Support, RGB Lights', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('DRAGON Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('8383 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Speaker 4", Height 22"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('8585 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 32"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('7474 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Wire/Wireless Mic, Speaker 4", Height 38"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('7575 Tower Speaker', 'LED Display, Remote Control, Bass 8" subwoofer, Crystal Clear Sound, Speaker 4", Height 27"', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('3232 PRO SERIES', 'LED Display, Remote Control, Bass 5.25" subwoofer, Crystal Clear Sound, RGB Lights', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true),
('3434 Tower Speaker', 'LED Display, Remote Control, Bass 5.25" subwoofer, Crystal Clear Sound, RGB Lights (multi-colour)', 'Tower Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true);

-- 2. Home Theatre Systems
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('9494 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 8" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('8787 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('6363 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('8802 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('8801 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 6.5" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('5151 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 5.25" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4747 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4949 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4848 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4393 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4383 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4353 Home Theatre (4.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2383 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2353 Home Theatre (2.1)', 'LED Display, Remote Control, USB/FM, High Bass, Wireless, 4" Subwoofer', 'Home Theatre Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 3. Audio Amplifiers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('4440 DIC AMP 1313', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4440 DIC AMP 1010', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4440 DIC AMP 1717', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4440 DIC AMP 2626', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('4440 DIC AMP 1414', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4440 DIC AMP 1515', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4440 DIC AMP 2828', '4440 DIC Amplifier - Professional audio amplification', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Transistor AMP 8000', '8 Transistor 3055 - High power amplifier', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 5.0, 0, 100, true, true),
('Transistor AMP 5000', '4 Transistor 3055 - Professional amplifier', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Transistor AMP 5500', '5 Transistor 3055 - Professional amplifier', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Sound Box UT-1525', '5" Speaker sound box - Portable audio solution', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Sound Box UT-1990', '8" Speaker sound box - Portable audio solution', 'Audio Amplifiers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 4. DTH Receivers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('Fiber Gold+ DTH', 'Free-to-air Digital Satellite Receiver with advanced features', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Gold+ Non BT DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('Gold+ BT DTH', 'Free-to-air Digital Satellite Receiver with Bluetooth', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 5.0, 0, 100, true, true),
('Premium Series DTH', 'Premium Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Tiger DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('8015 DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('902 DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Udaan DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Drone DTH', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('DTH Boss', 'Free-to-air Digital Satellite Receiver', 'DTH Receivers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 5. Car Stereo Systems
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT 007 Car Stereo', 'Class D Car Tape - 50+50W powerful audio', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, false),
('UT 009 Car Stereo', 'Class D Car Tape - 100+100W powerful audio', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('UT 012 IPL Car Stereo', 'IPL Eco Series - Advanced car audio system', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('1340 Car Stereo', 'Premium car audio system', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('3131 Car Stereo', 'High-quality car audio system', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('3410 Tractor USB', 'Tractor USB audio system - Heavy duty', 'Car Stereo Systems', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 6. Transformers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('Transformer 12-0-12 1A', '12-0-12 / 0-12 : 1 AMP - Power transformer', 'Transformers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Transformer 12-0-12 2A', '12-0-12 / 0-12 : 2 AMP - Power transformer', 'Transformers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Transformer 12-0-12 3A', '12-0-12 / 0-12 : 3 AMP - Power transformer', 'Transformers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 7. LED/DTH Stands
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT-999 DTH Stand', 'Metal DTH stand 10.5in x 8.5in - Premium build', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-777 DTH Stand', 'Metal DTH stand 9in x 6.5in - Compact design', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-X45 LED Stand', 'Metal LED stand - Universal mounting', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('10 PRO LED Stand', 'Metal LED stand - Professional grade', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-26DX LED Stand', 'Metal LED stand - Deluxe model', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-225 LED Stand', 'Metal LED stand - Standard mounting', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('DTH Stand (Color)', 'DTH Stand - Available in multiple colors', 'LED/DTH Stands', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 8. Toshiba UOC Kits
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT 807 BU KIT', 'Toshiba UOC Kit - Complete solution', 'Toshiba UOC Kits', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT 806 STR KIT', 'Toshiba UOC Kit - Professional grade', 'Toshiba UOC Kits', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT 810 ULTRA SLIM 29" KIT', 'Toshiba UOC Kit - Ultra slim 29" model', 'Toshiba UOC Kits', 'UNITECH', NULL, NULL, 0, 5.0, 0, 100, false, false);

-- 9. Speakers (Components & Car)
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('3" Woofer/Speaker', 'High-quality 3 inch woofer speaker', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4" Subwoofer', 'Powerful 4 inch subwoofer', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('4" Speaker', 'Premium 4 inch speaker', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('6.5" Woofer', 'High-performance 6.5 inch woofer', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('5.25" Woofer', 'Professional 5.25 inch woofer', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('8" Woofer', 'Premium 8 inch woofer', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('10" Subwoofer', 'High-power 10 inch subwoofer', 'Speakers', 'UNITECH', NULL, NULL, 0, 5.0, 0, 100, true, false),
('4" Tweeter', 'Crystal clear 4 inch tweeter', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('UT 404 Car Speaker', 'Premium car speaker - Crystal clear sound', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT 606 Car Speaker', 'Premium car speaker - High performance', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('003 Car Speaker', 'Professional car speaker', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('102B Car Speaker', 'High-quality car speaker', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('4" Car Speaker', 'Standard car speaker - 4 inch', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Car Bass Tube 8"', 'Car Bass Tube Subwoofer with in-built amplifier - 8 inch', 'Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true),
('Car Bass Tube 10"', 'Car Bass Tube Subwoofer with in-built amplifier - 10 inch', 'Speakers', 'UNITECH', NULL, NULL, 0, 5.0, 0, 100, true, true);

-- 10. Portable Speakers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('Fire Trolly Speaker', 'Portable trolley speaker with wireless connectivity', 'Portable Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Beat Sound Bar', 'Premium soundbar with Bluetooth connectivity', 'Portable Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Tiago Portable Speaker', 'Compact portable speaker - High quality sound', 'Portable Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 11. Satellite Speakers
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT-501 Satellite Speaker', 'Premium satellite speaker for home theatre', 'Satellite Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-502 Satellite Speaker', 'High-quality satellite speaker', 'Satellite Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-602 Satellite Speaker', 'Professional satellite speaker', 'Satellite Speakers', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('UT-801 Satellite Speaker', 'Premium satellite speaker system', 'Satellite Speakers', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 12. Audio Boards
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT-502 Audio Board', '4 IC 2030 - Professional audio board', 'Audio Boards', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-501 Audio Board', '3 IC 2030 - High-quality audio board', 'Audio Boards', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-801 Eco Audio Board', '3 IC - Eco series audio board', 'Audio Boards', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 13. Soldering Irons
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('UT-1245 Soldering Iron', '25W soldering iron - Professional grade', 'Soldering Iron', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-1255 Soldering Iron', '25W soldering iron with hook - Enhanced grip', 'Soldering Iron', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('UT-1550 Soldering Iron', '15W soldering iron - Precision work', 'Soldering Iron', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 14. Cords/Cables
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('2 Pin Main Cable', 'Standard 2 pin main power cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('3 Pin Main Cable', 'Standard 3 pin main power cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Computer Cable', 'Standard computer power cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('LED TV Cable L-type', 'L-type Philips cable for LED TV', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('P-38 to P-38 Mic Cable', 'Professional microphone cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('P-38 to XLR Mic Cable', 'Professional microphone cable XLR', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Solder Wire', 'High-quality solder wire for electronics', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('DTH Wire', 'Standard DTH connection wire', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('RG-6 Cable Drum 250m', 'Coaxial cable drum - 250 meters', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('RG-6 Coaxial 100 Yard', 'Coaxial cable - 100 yards', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Single RCA Cable', 'Single RCA audio/video cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Laptop Cable', 'Standard laptop power cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2 Pin DTH Lead with Connector', 'DTH connection lead with connector', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('BNC Cable & DC Cable', 'BNC and DC cable combo', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2RCA to P-38 Mic Cable', 'Audio cable adapter', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2XLR to 1XLR Mic Cable', 'Professional XLR microphone cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('2RC to 2RC Cable', 'RCA to RCA audio cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('3RC to 3RC Cable', 'Triple RCA audio/video cable', 'Cords/Cable', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 15. Appliances
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('2200W Induction', 'High-power induction cooktop - 2200W', 'Appliances', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Gypsy Horn', 'Powerful horn for vehicles', 'Appliances', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Toofan Multipurpose Fan', 'High-speed multipurpose fan', 'Appliances', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false);

-- 16. Power Strips
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('Crown Power Strip', 'Premium power strip with surge protection', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false),
('Royal Power Strip with USB', 'Power strip with integrated USB charging ports', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Royal Power Strip', 'Standard power strip with surge protection', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Ecostar Mini Power Strip', 'Compact power strip - Space saving design', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Classic Extension Cord', 'Heavy-duty extension cord', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, false),
('Queen Power Strip', 'Deluxe power strip with safety features', 'Power Strips', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, false);

-- 17. Hot Selling Products
INSERT INTO public.products (name, description, category, brand, price, original_price, discount_percent, rating, reviews_count, stock, is_featured, is_trending) VALUES
('SMPS Adapter', 'High-quality SMPS power adapter', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('DTH Card', 'Universal DTH smart card', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, true),
('Car Stereo Cabinet', 'Premium car stereo mounting cabinet', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, true),
('Agriculture Adapter', 'Heavy-duty adapter for agricultural equipment', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true),
('Autocut', 'Automatic voltage cut-off device', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true),
('DTH SMPS Supply', 'SMPS power supply for DTH receivers', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Britelite Adapter', 'Premium Britelite power adapter', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, true),
('USB/FM Card', 'USB and FM card module for audio systems', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true),
('Gang Box 12V/24V', 'Dual voltage gang box - 12V/24V', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.0, 0, 100, false, true),
('Foldable Megaphone', 'Portable foldable megaphone with siren', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, false, true),
('USB/SD Module', 'USB and SD card module for audio systems', 'Hot Selling Products', 'UNITECH', NULL, NULL, 0, 4.5, 0, 100, true, true);

-- Note: Image URLs should be updated with actual product images
-- For now, they can use placeholder images or be updated later via the admin panel
