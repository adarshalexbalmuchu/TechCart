# 🧪 TechCart Features Testing Guide

## ✅ Quick Test Checklist

### 1. **Cart Functionality** 🛒
- [ ] **Add Product to Cart**
  - Go to homepage or any product listing
  - Click "Add to Cart" button on any product card
  - Check if toast notification appears: "Added to cart!"
  - Look at header - cart icon should show item count badge
  
- [ ] **View Cart**
  - Click the cart icon in the header (top right)
  - Cart sidebar should slide in from the right
  - Product should appear with image, name, price, and quantity controls
  
- [ ] **Update Quantity**
  - In cart sidebar, use + and - buttons
  - Quantity should update
  - Total price should recalculate
  
- [ ] **Remove from Cart**
  - Click trash icon on cart item
  - Item should be removed
  - Toast: "Removed from cart"

- [ ] **Checkout Flow**
  - Click "Checkout" button in cart
  - Should navigate to 3-step checkout:
    1. Shipping address form
    2. Payment selection (COD)
    3. Order confirmation
  - Complete an order and verify confirmation page

### 2. **Product Comparison Feature** 📊
- [ ] **Find Comparison Button**
  - Hover over any product card
  - Look for **GitCompare icon** (📊) in top-right quick actions
  - It should appear alongside the heart (wishlist) icon
  
- [ ] **Add Products to Compare**
  - Click the compare icon on a product card
  - Button should turn blue (active state)
  - Toast notification: "Added to compare"
  - Header compare icon (📊 next to cart) should show count badge
  
- [ ] **Add Multiple Products**
  - Add 2-4 products to comparison
  - Each addition should update the counter in header
  - Try adding a 5th product - should show error: "Maximum 4 products can be compared"
  
- [ ] **Remove from Comparison**
  - Click the compare icon again on an already-compared product
  - Button should return to normal state
  - Toast: "Removed from compare"
  - Header counter should decrease
  
- [ ] **View Comparison Page**
  - Click the compare icon in the header (next to wishlist)
  - Should navigate to `/compare` page
  - See side-by-side comparison table with:
    * Product images
    * Names
    * Prices
    * Ratings
    * Brands
    * Discounts
    * Descriptions
    * Add to Cart buttons
  
- [ ] **Clear Comparison**
  - Click "Clear All" button on compare page
  - All products should be removed
  - Empty state should appear: "No products to compare"

### 3. **Search & Filters** 🔍
- [ ] **Search Products**
  - Use search bar in header
  - Type product name (e.g., "Tower")
  - Results should filter in real-time
  
- [ ] **Brand Filter**
  - Go to any products page
  - Click on desktop sidebar or mobile filter button
  - Select a brand (e.g., "UNITECH")
  - Products should filter to show only that brand
  
- [ ] **Price Range Filter**
  - In filters sidebar, select a price range
  - Products should filter accordingly
  - Active filter chips should appear above products
  
- [ ] **Clear Filters**
  - Click "Clear All Filters" button
  - All filters should reset

### 4. **Authentication** 🔐
- [ ] **Sign In Required**
  - Try adding to cart without signing in
  - Should show error: "Please sign in to add items to cart"
  - Clicking cart icon should show "Sign in to view your cart"
  
- [ ] **Sign In**
  - Click "Sign In" button
  - Navigate to `/auth` page
  - Sign in with email/password
  - Should redirect back to homepage

### 5. **Wishlist** ❤️
- [ ] **Add to Wishlist**
  - Click heart icon on product card
  - Heart should fill with red color
  - Toast: "Added to wishlist"
  
- [ ] **View Wishlist**
  - Click wishlist icon in header
  - Navigate to `/wishlist` page
  - All wishlisted products should appear

### 6. **Product Details** 📱
- [ ] **View Product**
  - Click on any product card
  - Should navigate to product detail page
  - Should show:
    * Large product image
    * Product name, brand, category
    * Price and discount
    * Rating and reviews
    * Full description
    * Stock status
    * **Add to Cart** button (NOT "Request Quote")
    * Quantity selector

### 7. **Admin Dashboard** 👨‍💼
- [ ] **Admin Access** (if you have admin role)
  - Navigate to `/admin`
  - Should see admin dashboard with:
    * Product management table
    * Add new product form
    * Edit/delete product actions
    * Statistics (total products, active, low stock)

---

## 🐛 Known Issues to Test

### Cart Not Loading?
- **Check 1**: Are you signed in? Cart requires authentication
- **Check 2**: Open browser console (F12) - look for any errors
- **Check 3**: Check Supabase RLS policies - run `check_admin.sql` in SQL Editor
- **Check 4**: Verify cart_items table exists in Supabase

### Comparison Button Not Visible?
- **Check 1**: Hover over product card - icons appear on hover
- **Check 2**: Check if useCompare hook is imported in ProductCard
- **Check 3**: Look for GitCompare icon in Header (next to cart icon)
- **Check 4**: Open browser console - check for any import errors

---

## 🎯 Quick Test Scenario

**Complete User Journey (5 minutes):**

1. **Browse** → Go to homepage
2. **Add to Compare** → Add 3 different tower speakers to comparison
3. **View Comparison** → Click compare icon in header
4. **Choose Product** → Click "Add to Cart" on your favorite
5. **View Cart** → Click cart icon to see product
6. **Update Quantity** → Change to 2 units
7. **Checkout** → Complete checkout flow
8. **Order Confirmation** → Verify order placed successfully

---

## 🔧 Troubleshooting

### Cart Empty After Adding?
```sql
-- Run this in Supabase SQL Editor to check cart data:
SELECT * FROM cart_items WHERE user_id = auth.uid();
```

### Products Have No Prices?
```sql
-- Verify products were seeded with prices:
SELECT id, name, price FROM products LIMIT 10;

-- If prices are NULL, run:
-- supabase/seed-unitech-data-with-prices.sql
```

### Comparison Not Persisting?
- Check browser LocalStorage (F12 → Application → Local Storage)
- Should see `compare-storage` key
- Clear it and try again if corrupted

---

## 📸 Screenshots to Take

1. Homepage with products showing "Add to Cart" buttons
2. Cart sidebar with items
3. Comparison icon visible on product card hover
4. Compare page with 2-4 products side-by-side
5. Checkout confirmation page

---

## ✨ Success Criteria

✅ **Cart Working**: Can add, remove, update quantities  
✅ **Comparison Working**: Can add up to 4 products, view comparison table, remove products  
✅ **All Products Show Prices**: No more "Price on Request"  
✅ **Filters Working**: Brand and price filters functional  
✅ **Checkout Complete**: Can place COD orders  

---

**Need Help?**
- Check browser console for errors (F12)
- Verify you've run `supabase/seed-unitech-data-with-prices.sql`
- Ensure you're signed in for cart/wishlist features
- Try clearing browser cache and localStorage
