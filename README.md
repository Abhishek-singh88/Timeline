# 🚀 GitHub Timeline Email Subscription Service

A full-stack web application that allows users to subscribe to curated GitHub timeline updates via email. Built with React, Express.js, and Supabase, featuring a professional admin panel for manual email campaigns.

![GitHub Timeline Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Supabase](https://img.shields.io/badge/Database-Supabase-orange)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Admin Panel](#-admin-panel)
- [Usage](#-usage)

## ✨ Features

### Frontend
- 🎨 **Professional UI** - Dark theme with glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔔 **Toast Notifications** - Real-time user feedback
- 🔐 **Secure Admin Panel** - Password-protected admin access
- ⚡ **Fast & Modern** - Built with Vite and React 18

### Backend
- 📧 **Email Management** - Automated welcome and timeline emails
- 🗄️ **Database Integration** - Supabase for subscriber management
- 🔄 **GitHub API Integration** - Fetches latest public timeline events
- 🛡️ **Rate Limit Handling** - GitHub token authentication
- 📊 **Admin Analytics** - Subscriber count and campaign tracking

### Admin Features
- 📈 **Dashboard Analytics** - View subscriber statistics
- 📨 **Manual Email Triggers** - Send updates on-demand
- 👁️ **Preview Function** - Preview GitHub timeline before sending
- ✅ **Campaign Tracking** - Monitor email delivery success/failure
- 🔒 **Secure Access** - Password-protected admin functionality

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **React Hot Toast** - Notification system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Supabase** - Database and authentication
- **Nodemailer** - Email service
- **Axios** - GitHub API integration

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **Supabase** - Database hosting

## 📁 Project Structure
```bash
Timeline/
├── 📁 src/
│ ├── 📁 components/
│ │ ├── Header.jsx # Main header with admin button
│ │ ├── SignupForm.jsx # Email subscription form
│ │ ├── AdminDashboard.jsx # Admin panel
│ │ ├── SuccessMessage.jsx # Success confirmation
│ │ ├── LoadingSpinner.jsx # Loading component
│ │ └── Footer.jsx # Page footer
│ ├── 📁 services/
│ │ └── api.js # API service functions
│ ├── App.jsx # Main app component
│ ├── main.jsx # App entry point
│ └── index.css # Global styles
├── package.json # Frontend dependencies
├── .env # Frontend environment variables
└── vite.config.js # Vite configuration

```


## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Gmail account (for sending emails)
- GitHub account (for API token)

### 1. Clone Repository
```bash
git clone https://github.com/abhishek-singh88/Timeline.git
cd Timeline
```

### 2. Backend Setup
 
 Backend code : https://github.com/Abhishek-singh88/Timeline-backend

### 3. Frontend Setup
```bash
cd ../timeline
npm install
```
Create .env file
```bash
cp .env.example .env
```
Edit .env with your values
Start development server
```bash
npm run dev
```


### 4. Database Setup (Supabase)

Create a table in your Supabase database:
```bash
CREATE TABLE email_subscribers (
id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
is_active BOOLEAN DEFAULT true,
subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_email_subscribers_active ON email_subscribers(is_active);
CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);
```


## 🔧 Environment Variables

### Backend (.env)
```bash
PORT=5000
NODE_ENV=development

Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_role_key

Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```


## 🔐 Admin Panel

### Access Admin Panel
1. Visit your deployed frontend
2. Click the **Admin** button (⚙️) in the top-right corner
3. Enter your admin password (set in `VITE_ADMIN_PASSWORD`)
4. Access granted! 🎉

### Admin Features
- **📊 Dashboard Analytics**: View total active subscribers
- **📨 Send Campaign**: Trigger GitHub timeline emails to all subscribers
- **👁️ Preview Timeline**: Preview GitHub events before sending
- **📈 Campaign Stats**: Track email delivery success/failure rates
- **🚪 Easy Exit**: Click "Exit Admin" to return to public view

### Admin Security
- Password-protected access
- No persistent sessions (resets on page reload)
- Environment variable configuration
- Confirmation dialogs for critical actions

## 🎯 Usage

### For Users
1. Visit the website
2. Enter your email address
3. Click "Subscribe to Updates"
4. Check your email for confirmation
5. Receive curated GitHub timeline updates!

### For Admins
1. Access admin panel with password
2. Review subscriber count and previous campaigns
3. Use "Preview" to see current GitHub timeline events
4. Click "Send GitHub Updates" to trigger email campaign
5. Monitor delivery statistics

## 🔄 How It Works

1. **User Subscribes** → Email stored in Supabase database
2. **Admin Triggers** → Backend fetches latest GitHub public events
3. **Email Generation** → Events formatted into professional HTML email
4. **Bulk Sending** → Emails sent to all active subscribers via Gmail SMTP
5. **Success Tracking** → Delivery statistics recorded and displayed

## 🛡️ Security Features

- **Environment Variables** for sensitive data
- **CORS Protection** with specific origin allowlist
- **Admin Authentication** with password protection
- **Rate Limiting** with GitHub token authentication
- **Input Validation** for email addresses and API requests
- **Error Handling** with detailed logging

## 🚀 Performance Optimizations

- **Cached GitHub Timeline** to reduce API calls
- **Bulk Email Processing** with rate limiting
- **Responsive Design** for all device types
- **Optimized Images** and lazy loading
- **Fast Build Times** with Vite

## 📝 Development

### Run Locally



