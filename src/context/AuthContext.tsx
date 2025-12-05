import { createContext, useContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export type UserRole = 'RENEWAL_USER' | 'GUN_DEALER' | 'ADMIN'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const login = async (email: string, password: string): Promise<boolean> => {
    // Dummy credentials check
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay

    if (password !== 'password123') return false

    let role: UserRole | null = null
    let name = ''

    if (email === 'user@renewal.com') {
      role = 'RENEWAL_USER'
      name = 'Renewal User'
    } else if (email === 'dealer@guns.com') {
      role = 'GUN_DEALER'
      name = 'Gun Dealer'
    } else if (email === 'admin@police.gov.gh') {
      role = 'ADMIN'
      name = 'Police Admin'
    }

    if (role) {
      const newUser = { id: '1', email, name, role }
      setUser(newUser)
      
      // Redirect based on role
      switch (role) {
        case 'RENEWAL_USER':
          navigate('/renewal')
          break
        case 'GUN_DEALER':
          navigate('/dealer-registration')
          break
        case 'ADMIN':
          navigate('/dashboard')
          break
      }
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
