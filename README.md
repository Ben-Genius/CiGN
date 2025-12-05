# CiGN - Gun Tracking SaaS

CiGN is a comprehensive Gun Tracking SaaS application designed to streamline the management of firearm licenses, dealer registrations, and compliance reporting. It provides a secure and efficient platform for administrators, renewal users, and gun dealers to manage their respective workflows.

## Features

- **Role-Based Access Control (RBAC)**: Secure access for different user roles:
  - **Admin**: Full access to dashboard, license management, and alerts.
  - **Renewal User**: Dedicated interface for license renewal.
  - **Gun Dealer**: Registration and management portal for dealers.
- **Dashboard**: Real-time overview of key metrics and activities.
- **License Management**: Create, update, and track firearm licenses.
- **Alerts & Reporting**: Automated alerts for expiring licenses and compliance issues.
- **Dealer Registration**: Streamlined process for new gun dealers to register.
- **Secure Authentication**: Robust login and signup system.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Tech Stack

- **Frontend**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Context API
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) and [Lottie React](https://github.com/Gamote/lottie-react)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ben-Genius/CiGN.git
   cd CiGN
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
src/
├── assets/         # Images, fonts, and other static assets
├── components/     # Reusable UI components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Custom components
├── context/        # React Context providers (e.g., AuthContext)
├── lib/            # Utility functions
├── pages/          # Application pages (Dashboard, Login, etc.)
├── App.tsx         # Main application component with routing
└── main.tsx        # Entry point
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.
- `npm run deploy`: Deploys the application to GitHub Pages.

## License

This project is licensed under the MIT License.
