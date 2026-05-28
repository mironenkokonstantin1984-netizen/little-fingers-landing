# Little Fingers - План розвитку дитини

Modern landing page for Little Fingers - Child Development Plan

## 🎨 Features

- ✨ Minimalist, modern design (2024-2025)
- 🎯 Interactive quiz for age selection
- 📧 Email capture form
- ⏱️ FOMO timer for special offer
- 💳 Pricing section
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your changes

[Deploy on Vercel →](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 📚 Technology Stack

- **Frontend Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React Icons
- **Language:** TypeScript/JavaScript
- **Deployment:** Vercel

## 📝 File Structure

```
little-fingers-landing/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── landing.jsx         # Landing page component
├── public/                 # Static files
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md              # This file
```

## 🎯 Next Steps

1. **Integrate Email Service**
   - Connect to Mailchimp, Brevo, or other email service
   - Update the `handleSubmit` function in `components/landing.jsx`

2. **Setup Payment Gateway**
   - Integrate WayForPay, Stripe, or other payment processor
   - Add payment button functionality

3. **Add Telegram Integration**
   - Send plan to users via Telegram after signup
   - Create Telegram bot for announcements

4. **Replace Assets**
   - Add real images instead of emojis
   - Update testimonials with real customer photos
   - Add author photo

## 📄 License

This project is licensed under the MIT License.

## 👩‍💼 About

Little Fingers is a development plan app for children ages 8 months to 3+ years, created by Natalia.

---

Made with 💜 for moms
