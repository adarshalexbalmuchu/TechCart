# 🎯 TechCart - Complete Feature Testing Guide

## 🚀 Quick Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:** http://localhost:8080

3. **Sign in** (cart and checkout require authentication)

---

## 🔍 Finding the Comparison Button

### **Location 1: Product Cards (Hover to See)**

The comparison button appears when you **hover over any product card**:

1. Go to homepage or any products page
2. **Hover your mouse over a product card**
3. Look at the **top-right corner** of the product image
4. You'll see TWO icons appear:
   - ❤️ **Heart icon** (Wishlist)
   - 📊 **GitCompare icon** (Comparison) ← THIS IS IT!

**Visual Guide:**
```
┌─────────────────────────────┐
│  Product Image              │
│                    ❤️  📊  │ ← Icons appear here on hover
│                             │
├─────────────────────────────┤
│  Product Name               │
│  ₹ Price                    │
│  [Add to Cart]              │
└─────────────────────────────┘
```

### **Location 2: Header (After Adding Products)**

Once you add products to comparison:
- Look at the **header** (top of page)
- Next to the Cart icon
- You'll see: 📊 **Compare icon with a number badge**

---

## 🛒 1. Cart Functionality Testing

### **Test 1.1: Add Product to Cart**

**Steps:**
1. Make sure you're signed in
2. Go to homepage
3. Click "Add to Cart" on any product
4. ✅ Toast should appear: "Added to cart!"
5. ✅ Cart icon in header shows count badge

**Expected Result:** Product added, cart count updates

### **Test 1.2: View Cart**

**Steps:**
1. Click the **Cart icon** in header (top right)
2. Cart sidebar slides in from right

**Expected Result:** 
- Product listed with image, name, price
- Quantity controls (+ and -)
- Total price shown
- "Checkout" button visible

### **Test 1.3: Update Quantity**

**Steps:**
1. In cart sidebar, click the **+** button
2. Quantity should increase
3. Click the **-** button
4. Quantity should decrease

**Expected Result:** Total price recalculates automatically

### **Test 1.4: Remove from Cart**

**Steps:**
1. Click the **trash icon** on a cart item
2. ✅ Toast: "Removed from cart"

**Expected Result:** Item disappears, total updates

---

## 📊 2. Product Comparison Testing

### **Test 2.1: Find Comparison Button**

**Steps:**
1. Go to homepage or products listing
2. **Hover over ANY product card**
3. Look at top-right corner of product image
4. See 📊 GitCompare icon appear

**Tip:** If you don't see it, try:
- Refresh the page (Ctrl/Cmd + R)
- Check if you're hovering directly over the product card
- Icons have `opacity-0 group-hover:opacity-100` animation

### **Test 2.2: Add Product to Comparison**

**Steps:**
1. Hover over a product
2. Click the 📊 **compare icon**
3. ✅ Icon turns **blue** (active state)
4. ✅ Toast: "Added to compare"
5. ✅ Header compare icon shows count (e.g., "1")

**Expected Result:** 
- Button background changes to blue
- Counter appears in header

### **Test 2.3: Add Multiple Products**

**Steps:**
1. Add 2-4 different products to comparison
2. Each click increases the counter
3. Try adding a 5th product

**Expected Result:**
- Counter increases with each addition (max 4)
- 5th product shows error: "Maximum 4 products can be compared"

### **Test 2.4: Remove from Comparison**

**Steps:**
1. Click the blue compare icon on a compared product
2. ✅ Button returns to normal state
3. ✅ Toast: "Removed from compare"
4. ✅ Counter decreases

**Expected Result:** Product removed, button deactivates

### **Test 2.5: View Comparison Page**

**Steps:**
1. Add 2-4 products to comparison
2. Click the **📊 Compare icon in header** (next to cart)
3. Page navigates to `/compare`

**Expected Result:**
- See side-by-side comparison table
- Columns: Image, Name, Price, Rating, Brand, Discount, Description
- "Add to Cart" button for each product
- "Clear All" button at top

### **Test 2.6: Clear All Comparisons**

**Steps:**
1. On compare page, click "Clear All"
2. All products removed
3. Empty state appears: "No products to compare"

**Expected Result:** Comparison list cleared

---

## 💳 3. Checkout Testing

### **Test 3.1: Access Checkout**

**Steps:**
1. Add products to cart
2. Click cart icon
3. Click "Checkout" button

**Expected Result:** Navigate to `/checkout` page

### **Test 3.2: Shipping Information (Step 1)**

**Steps:**
1. Fill in all required fields:
   - Full Name
   - Phone Number (10 digits)
   - Address
   - City
   - State
   - Pincode
2. Click "Continue to Payment"

**Expected Result:** Move to Step 2 (Payment)

### **Test 3.3: Razorpay Payment (Step 2)**

**Prerequisites:**
- Set up Razorpay credentials (see RAZORPAY_SETUP.md)
- Add `.env.local` with your Razorpay Key ID

**Steps:**
1. Select "Online Payment (Razorpay)" (should be selected by default)
2. Click "Pay ₹[amount]" button
3. Razorpay modal opens

**For Testing (Use Test Card):**
- Card Number: `4111 1111 1111 1111`
- CVV: `123`
- Expiry: `12/25`
- Name: `Test User`

4. Click "Pay"

**Expected Result:**
- Payment processes
- Order status: "confirmed"
- Navigate to confirmation page

### **Test 3.4: COD Payment (Step 2)**

**Steps:**
1. Select "Cash on Delivery (COD)"
2. Click "Place Order"

**Expected Result:**
- Order created with status "pending"
- Navigate to confirmation page
- Cart is cleared

### **Test 3.5: Order Confirmation (Step 3)**

**Expected Result:**
- ✅ Green checkmark icon
- "Order Placed Successfully!"
- Order ID displayed
- "View Orders" button
- "Continue Shopping" button

---

## 🔍 4. Search & Filter Testing

### **Test 4.1: Search Products**

**Steps:**
1. Use search bar in header
2. Type "Tower"
3. Press Enter or click search

**Expected Result:** Shows only products matching "Tower"

### **Test 4.2: Brand Filter**

**Steps:**
1. Go to any products page
2. On desktop: See sidebar on left
3. On mobile: Click "Filters" button
4. Select a brand (e.g., "UNITECH")

**Expected Result:** Products filtered by selected brand

### **Test 4.3: Price Range Filter**

**Steps:**
1. In filter sidebar, select a price range
   - Under ₹5,000
   - ₹5,000 - ₹10,000
   - ₹10,000 - ₹25,000
   - ₹25,000 & Above

**Expected Result:** Products filtered by price range

### **Test 4.4: Multiple Filters**

**Steps:**
1. Select a brand
2. Select a price range
3. See active filter chips above products

**Expected Result:** Products match BOTH filters

### **Test 4.5: Clear Filters**

**Steps:**
1. Click "Clear All Filters" button

**Expected Result:** All filters reset, all products shown

---

## 🚨 Troubleshooting

### **Issue: Can't find comparison button**

**Solutions:**
1. **Make sure you're HOVERING** over product cards
2. Check browser console (F12) for errors
3. Try refreshing the page
4. Verify ProductCard.tsx has the compare icon code
5. Check if CSS is blocking visibility

**Quick Test:**
```javascript
// Open browser console and run:
document.querySelectorAll('[class*="GitCompare"]').length
// Should return a number > 0
```

### **Issue: Checkout page not loading**

**Solutions:**
1. Check if you're signed in (required)
2. Check if cart has items
3. Open browser console for errors
4. Verify `/checkout` route exists in App.tsx
5. Check network tab for failed requests

### **Issue: Razorpay not opening**

**Solutions:**
1. Check if `.env.local` has `VITE_RAZORPAY_KEY_ID`
2. Verify Razorpay script loaded:
   ```javascript
   // In browser console:
   typeof Razorpay // Should return "function"
   ```
3. Check internet connection
4. Try test mode first

### **Issue: Cart items not showing**

**Solutions:**
1. **Must be signed in** (cart requires auth)
2. Check Supabase connection
3. Run in Supabase SQL Editor:
   ```sql
   SELECT * FROM cart_items WHERE user_id = auth.uid();
   ```
4. Check RLS policies on `cart_items` table

---

## ✅ Complete Test Scenario (5 Minutes)

**Full User Journey:**

1. ✅ **Browse** → Go to homepage
2. ✅ **Compare** → Hover and add 3 products to comparison (look for 📊 icon)
3. ✅ **View Comparison** → Click compare icon in header
4. ✅ **Choose** → Click "Add to Cart" on your favorite
5. ✅ **Cart** → Click cart icon, see product
6. ✅ **Checkout** → Click checkout button
7. ✅ **Shipping** → Fill details, continue
8. ✅ **Payment** → Select Razorpay, pay with test card
9. ✅ **Confirm** → See order confirmation

**Time:** ~5 minutes  
**Result:** Complete e-commerce flow tested!

---

## 📸 Visual Checklist

Take screenshots of:
- [ ] Product card with compare icon visible (on hover)
- [ ] Header showing compare counter badge
- [ ] Comparison page with 2-4 products
- [ ] Cart sidebar with items
- [ ] Checkout Step 1 (Shipping)
- [ ] Checkout Step 2 (Payment selection)
- [ ] Razorpay payment modal
- [ ] Order confirmation page

---

## 🎨 UI Elements to Verify

### **Comparison Button Styling:**
- **Default state:** Gray background, gray border
- **Hover state:** Light blue border
- **Active state:** Blue background, white icon
- **Icon:** GitCompare (looks like 📊)
- **Size:** 3.5x3.5 (w-3.5 h-3.5)
- **Position:** Top-right of product image

### **Header Compare Icon:**
- **Location:** Between Wishlist and Cart icons
- **Icon:** GitCompare
- **Badge:** Shows count when > 0
- **Color:** Matches theme

---

## 💡 Pro Tips

1. **Use browser DevTools (F12)** to debug
2. **Check Console tab** for JavaScript errors
3. **Check Network tab** for failed API calls
4. **Use React DevTools** to inspect component state
5. **Clear LocalStorage** if comparison state seems stuck:
   ```javascript
   localStorage.clear()
   ```

---

## 🎯 Success Criteria

✅ **Comparison Feature:**
- Icon visible on hover
- Can add up to 4 products
- Counter shows in header
- Comparison page loads
- Can remove products

✅ **Cart Feature:**
- Can add products
- Cart sidebar works
- Quantity updates
- Can remove items

✅ **Checkout Feature:**
- 3-step flow works
- Razorpay payment modal opens
- Test payment succeeds
- COD option works
- Order confirmation shows

✅ **All Products Have Prices:**
- No "Price on Request"
- All show "Add to Cart" button

---

## 🆘 Need Help?

1. Check browser console for errors (F12)
2. Verify you've run `supabase/seed-unitech-data-with-prices.sql`
3. Ensure you're signed in
4. Try clearing browser cache
5. Check [RAZORPAY_SETUP.md](RAZORPAY_SETUP.md) for payment issues
6. Review [TESTING_GUIDE.md](TESTING_GUIDE.md) for detailed steps

---

**Happy Testing! 🎉**

Your TechCart store is now a complete e-commerce platform with:
- ✅ Product browsing & search
- ✅ Product comparison
- ✅ Shopping cart
- ✅ Checkout flow
- ✅ Razorpay payment gateway
- ✅ COD option
- ✅ Order management
