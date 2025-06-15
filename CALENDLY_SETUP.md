# Calendly Integration Setup Guide

## 🚨 **Seeing a "Page not found" Error?**

If you're seeing a Calendly 404 error on the `/booking` page, it's because the placeholder URL needs to be replaced with your actual Calendly link. This is expected and easy to fix!

**Current Status**: The booking page shows setup instructions until you add your real Calendly URL.

---

## 📅 **Setting Up Your Calendly Account**

### 1. **Create a Calendly Account**
1. Go to [calendly.com](https://calendly.com) and sign up
2. Choose your plan (free plan works fine for basic needs)
3. Complete your profile setup

### 2. **Create Your Meeting Type**
1. In your Calendly dashboard, click "Create" → "Event Type"
2. Choose "One-on-One" meeting type
3. Configure your meeting:
   - **Event Name**: "Consultation Call" or "Project Discussion"
   - **Duration**: 30 minutes (recommended for initial calls)
   - **Description**: Add details about what you'll discuss
   - **Location**: Zoom, Google Meet, or Phone call

### 3. **Get Your Calendly URL**
1. After creating your event type, copy the scheduling URL
2. It will look like: `https://calendly.com/your-username/consultation-call`

## 🔧 **Updating the Code**

### 4. **Update the Booking Page**
Replace the placeholder URL in `src/pages/Booking.tsx`:

```tsx
// Find this line:
data-url="https://calendly.com/your-calendly-username/30min"

// Replace with your actual URL:
data-url="https://calendly.com/your-actual-username/your-event-name"
```

### 5. **Update CalendlyBooking Component (Optional)**
If you want to use the modal instead of the booking page, update `src/components/CalendlyBooking.tsx`:

```tsx
// Find this line:
data-url="https://calendly.com/your-calendly-username/30min"

// Replace with your actual URL:
data-url="https://calendly.com/your-actual-username/your-event-name"
```

## 🎨 **Customization Options**

### 6. **Customize Calendly Appearance**
In your Calendly dashboard:
1. Go to "Account" → "Preferences" → "Embed Options"
2. Set primary color to match your brand: `#F97316` (orange)
3. Configure other styling options

### 7. **Advanced Configuration**
You can add additional parameters to the Calendly URL:
- `?primary_color=f97316` - Match your orange theme
- `?text_color=1f2937` - Set text color
- `?hide_landing_page_details=1` - Hide extra details
- `?hide_gdpr_banner=1` - Hide GDPR banner if not needed

Example with parameters:
```
https://calendly.com/your-username/consultation?primary_color=f97316&text_color=1f2937
```

## 🚀 **Current Implementation**

### ✅ **What's Already Set Up:**
1. **Booking Page**: `/booking` route with full-page Calendly embed
2. **Navigation**: Both hero and mission buttons redirect to booking page
3. **Responsive Design**: Works on all device sizes
4. **Styled Integration**: Matches your website's dark theme

### 🎯 **Button Mappings:**
- **"Let's Build Something Epic"** (Hero) → `/booking`
- **"Schedule a Call"** (Mission) → `/booking`
- **"Send Message"** → `/contact` (for written inquiries)

## 📱 **Testing**

### 8. **Test Your Integration**
1. Start your development server: `npm run dev`
2. Click on either scheduling button
3. Verify the Calendly widget loads correctly
4. Test booking a meeting (you can cancel test bookings)

## 🔄 **Alternative: Modal Implementation**

If you prefer a popup modal instead of a separate page, you can:
1. Uncomment the modal code in the components
2. Import and use `CalendlyBooking` component
3. Add state management for opening/closing the modal

## 📊 **Analytics & Tracking**

Calendly provides built-in analytics, or you can:
1. Add UTM parameters to track traffic sources
2. Set up webhook notifications for new bookings
3. Integrate with your CRM if needed

## 🎉 **You're All Set!**

Once you update your Calendly URL, visitors can:
- Schedule calls directly from your website
- Choose from available time slots
- Receive automatic confirmations
- Get calendar invites with meeting details

The integration maintains your website's professional appearance while providing a seamless booking experience!
