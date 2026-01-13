# 🔐 Razorpay Payment Integration Setup Guide

## 📋 Prerequisites

Before setting up Razorpay, you need:
1. A Razorpay account ([Sign up here](https://razorpay.com))
2. Razorpay API credentials (Key ID and Key Secret)

---

## 🚀 Step-by-Step Setup

### **Step 1: Create Razorpay Account**

1. Go to [https://razorpay.com](https://razorpay.com)
2. Click "Sign Up" and create your account
3. Complete the KYC verification (for live mode)
4. For testing, you can use **Test Mode** without KYC

### **Step 2: Get API Credentials**

1. Log in to Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Click "Generate Test Keys" (or "Generate Live Keys" for production)
4. Copy both:
   - **Key ID** (starts with `rzp_test_` or `rzp_live_`)
   - **Key Secret** (keep this secure!)

### **Step 3: Configure Environment Variables**

1. Create or update `.env.local` file in your project root:

```bash
# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxx
VITE_RAZORPAY_KEY_SECRET=your_key_secret_here
```

2. **Replace the values** with your actual Razorpay credentials

⚠️ **Important:** Never commit `.env.local` to Git! It's already in `.gitignore`

### **Step 4: Update Checkout Component**

The Checkout component is already configured. Just update line 202 in `/src/pages/Checkout.tsx`:

```typescript
key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxxxxxx",
```

Replace `rzp_test_xxxxxxxxxxxxxx` with your actual Test Key ID.

### **Step 5: Test the Integration**

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the checkout flow:**
   - Add products to cart
   - Go to checkout
   - Fill shipping details
   - Select "Online Payment (Razorpay)"
   - Click "Pay"

3. **Use Razorpay Test Cards:**

   **Successful Payment:**
   - Card Number: `4111 1111 1111 1111`
   - CVV: Any 3 digits
   - Expiry: Any future date
   - Name: Any name

   **Failed Payment:**
   - Card Number: `4000 0000 0000 0002`

   **Test UPI:**
   - UPI ID: `success@razorpay`
   - UPI ID (failure): `failure@razorpay`

---

## 💳 Payment Methods Supported

The integration supports:
- ✅ Credit/Debit Cards (Visa, Mastercard, Rupay, Amex)
- ✅ UPI (Google Pay, PhonePe, Paytm, etc.)
- ✅ Net Banking (50+ banks)
- ✅ Wallets (Paytm, PhonePe, Mobikwik, etc.)
- ✅ EMI (Credit/Debit card EMI)

---

## 🔄 Order Flow

1. **User adds products to cart**
2. **Proceeds to checkout**
3. **Fills shipping details**
4. **Selects payment method** (Razorpay or COD)
5. **For Razorpay:**
   - Order created in database with status "pending"
   - Razorpay checkout modal opens
   - User completes payment
   - On success: Order status → "confirmed"
   - On failure: Order status → "failed"
   - On cancel: Order status → "cancelled"
6. **Cart is cleared**
7. **Confirmation page shown**

---

## 🗄️ Database Schema

The orders are stored with:

```sql
orders table:
- id (UUID)
- user_id (UUID)
- total_amount (DECIMAL)
- status (TEXT) -- pending, confirmed, failed, cancelled
- payment_method (TEXT) -- razorpay, cod
- payment_id (TEXT) -- Razorpay payment ID
- shipping_address, shipping_name, shipping_phone, shipping_email
- created_at (TIMESTAMP)
```

---

## 🧪 Testing Checklist

### Razorpay Payment Testing:

- [ ] **Successful Payment Test**
  1. Add products to cart (logged in)
  2. Go to checkout
  3. Fill shipping details
  4. Select "Online Payment (Razorpay)"
  5. Use test card: `4111 1111 1111 1111`
  6. Complete payment
  7. Verify order shows in `/orders`
  8. Check database: order status = "confirmed"

- [ ] **Failed Payment Test**
  1. Repeat checkout process
  2. Use test card: `4000 0000 0000 0002`
  3. Payment should fail
  4. Check database: order status = "failed"

- [ ] **Cancelled Payment Test**
  1. Repeat checkout process
  2. Close Razorpay modal without paying
  3. Check database: order status = "cancelled"

- [ ] **UPI Payment Test**
  1. Select UPI payment method
  2. Use UPI ID: `success@razorpay`
  3. Complete payment
  4. Verify order confirmation

- [ ] **COD Test**
  1. Select "Cash on Delivery"
  2. Place order
  3. Verify order shows with payment_method = "cod"

---

## 🔒 Security Best Practices

1. **Never expose Key Secret in frontend**
   - Only use Key ID in frontend
   - Key Secret should only be in backend (future webhook setup)

2. **Validate payments on backend**
   - Implement webhook to verify payment signature
   - Create Supabase Edge Function for verification

3. **Use HTTPS in production**
   - Razorpay requires HTTPS for live payments

4. **Implement webhook verification**
   ```typescript
   // Future: Verify payment signature
   const crypto = require('crypto');
   const signature = crypto
     .createHmac('sha256', key_secret)
     .update(order_id + "|" + payment_id)
     .digest('hex');
   ```

---

## 🌐 Going Live

### **Moving from Test to Live Mode:**

1. **Complete KYC in Razorpay Dashboard**
   - Submit business documents
   - Bank account details
   - PAN, GST certificates

2. **Generate Live Keys**
   - Go to Settings → API Keys
   - Generate Live Keys
   - Update `.env.local`:
     ```bash
     VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxxx
     ```

3. **Update Razorpay Settings**
   - Enable required payment methods
   - Set payment capture mode (auto/manual)
   - Configure webhooks for payment verification

4. **Test in Production**
   - Use small amount for first live transaction
   - Verify webhook notifications
   - Check settlement reports

---

## 📞 Support & Resources

- **Razorpay Documentation:** [https://razorpay.com/docs/](https://razorpay.com/docs/)
- **Test Credentials:** [https://razorpay.com/docs/payments/payments/test-card-upi-details/](https://razorpay.com/docs/payments/payments/test-card-upi-details/)
- **Integration Checklist:** [https://razorpay.com/docs/payments/payments/checklist/](https://razorpay.com/docs/payments/payments/checklist/)
- **Support:** [https://razorpay.com/support/](https://razorpay.com/support/)

---

## 🔧 Troubleshooting

### "Razorpay is not defined" Error
**Solution:** Razorpay script not loaded. Check:
- Internet connection
- Browser console for script loading errors
- Add script tag to `index.html` if needed:
  ```html
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  ```

### Payment Modal Not Opening
**Solution:** 
- Verify `VITE_RAZORPAY_KEY_ID` is set correctly
- Check browser console for errors
- Ensure amount is in paise (multiply by 100)

### Order Created But Payment Failed
**Solution:**
- This is expected behavior
- Order status will be updated to "failed"
- User can retry payment
- Clean up failed orders periodically

### Webhook Not Receiving Events
**Solution:**
- Verify webhook URL is accessible publicly
- Use ngrok for local testing
- Check Razorpay Dashboard → Webhooks → Logs

---

## 💡 Tips

1. **Test thoroughly before going live**
2. **Monitor failed payments** - may indicate UX issues
3. **Set up email notifications** for order confirmations
4. **Implement retry logic** for failed payments
5. **Add order tracking** for better customer experience

---

## ✅ What's Implemented

✅ **Razorpay Checkout Integration**
✅ **Multiple Payment Methods** (Card, UPI, Net Banking, Wallets)
✅ **COD Option** (Cash on Delivery)
✅ **Order Creation** in database
✅ **Payment Status Tracking** (pending, confirmed, failed, cancelled)
✅ **Cart Auto-Clear** on successful payment
✅ **Order Confirmation Page**
✅ **User Profile Update** with shipping details

---

## 🚧 Future Enhancements

- [ ] Webhook verification for payment security
- [ ] Refund processing
- [ ] Partial payments
- [ ] Subscription billing
- [ ] International payments
- [ ] EMI calculator
- [ ] Order tracking with delivery updates

---

## 🎉 You're All Set!

Your TechCart store is now ready to accept payments via Razorpay! 🚀

Test the integration thoroughly in Test Mode before going live.
