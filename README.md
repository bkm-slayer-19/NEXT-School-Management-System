# Bijay Dev School Management Dashboard

A comprehensive full-stack school management platform with role-based authentication supporting students, teachers, and administrators with secure dashboard access.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication
- Cloudinary account for image storage

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bkm-slayer-19/NEXT-School-Management-System.git
cd NEXT-School-Management-System
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="your-postgresql-connection-string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
```

4. **Set up database**
```bash
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## ✨ Key Features

### 🔐 Authentication & Authorization
- **Role-based access control** with Clerk authentication
- Secure dashboard access for **Students**, **Teachers**, **Parents**, and **Administrators**
- JWT-based session management with middleware protection

### 📊 Comprehensive Dashboard
- **Interactive data visualization** with Recharts
- **Real-time attendance tracking** and reporting
- **Calendar integration** with React Big Calendar for events and scheduling
- **Performance analytics** and student progress tracking

### 👥 User Management
- Robust PostgreSQL database schema managing **50+ students**, **15+ teachers**, and **25+ parents**
- Automated database migrations with Prisma ORM
- Complex relational data handling (students ↔ classes ↔ teachers ↔ subjects)

### 📝 Academic Features
- **Class and subject management**
- **Assignment and exam scheduling**
- **Grade and result tracking**
- **Attendance monitoring**
- **Announcement system**

### 🎨 Modern UI/UX
- **Fully responsive design** with Tailwind CSS
- **Image upload and management** with Cloudinary CDN
- **Form validation** using React Hook Form + Zod schemas
- **Enhanced error handling** with user-friendly messages

## 🛠️ Complete Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma ORM** - Database toolkit and query builder
- **PostgreSQL** - Robust relational database

### Authentication & Storage
- **Clerk** - Complete authentication solution
- **Cloudinary** - Image storage and optimization

### Data Visualization & Forms
- **Recharts** - Interactive charts and graphs
- **React Big Calendar** - Event scheduling and calendar views
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation

### UI Components
- **Custom component library** built with Tailwind
- **Responsive design patterns**
- **Accessibility-first approach**

## 💡 Project Highlights

This project demonstrates advanced full-stack development capabilities:

✅ **Full-stack development** with modern React patterns  
✅ **Database design and management** with complex relationships  
✅ **Authentication implementation** with role-based access  
✅ **File upload systems** with cloud storage integration  
✅ **Data visualization skills** with interactive charts  
✅ **Form validation** with enhanced error handling  
✅ **Production-ready architecture** with TypeScript  
✅ **Modern development practices** and clean code principles  

## 🏗️ Architecture Overview

```
├── 🎯 Frontend (Next.js + React)
│   ├── Role-based dashboards
│   ├── Interactive charts & calendar
│   └── Responsive UI components
│
├── 🔗 Backend (Next.js API Routes)
│   ├── RESTful API endpoints
│   ├── Middleware authentication
│   └── Server actions
│
├── 🗄️ Database (PostgreSQL + Prisma)
│   ├── Relational data modeling
│   ├── Automated migrations
│   └── Type-safe queries
│
└── ☁️ External Services
    ├── Clerk (Authentication)
    └── Cloudinary (File Storage)
```

## 📈 Performance Features

- **Optimized database queries** with Prisma
- **Image optimization** with Cloudinary CDN
- **Server-side rendering** for improved SEO
- **Type safety** throughout the application
- **Error boundaries** and comprehensive error handling

## 🚀 Deployment Ready

The application is production-ready and can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway** or **Render**
- Any platform supporting Node.js

---

**Built with ❤️ by Bijay Dev**

*This project showcases modern full-stack development practices and serves as a comprehensive school management solution.*