import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import LicenseManagement from './pages/LicenseManagement'
import Alerts from './pages/Alerts'
import Renewal from './pages/Renewal'
import DealerRegistration from './pages/DealerRegistration'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import { Toaster } from 'sonner'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          
          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/licenses" element={<LicenseManagement />} />
            <Route path="/alerts" element={<Alerts />} />
          </Route>

          {/* Renewal User Routes */}
          <Route element={<ProtectedRoute allowedRoles={['RENEWAL_USER']} />}>
            <Route path="/renewal" element={<Renewal />} />
          </Route>

          {/* Gun Dealer Routes */}
          <Route element={<ProtectedRoute allowedRoles={['GUN_DEALER']} />}>
            <Route path="/dealer-registration" element={<DealerRegistration />} />
          </Route>

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  )
}

export default App
