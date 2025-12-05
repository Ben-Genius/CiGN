import { useState } from 'react'
import { Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react'
import { IMAGES } from '../assets/images'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { toast } from 'sonner'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const success = await login(data.email, data.password)
      if (!success) {
        toast.error('Invalid credentials')
      } else {
        toast.success('Logged in successfully')
      }
    } catch (error) {
      toast.error('An error occurred during login')
    }
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 sm:px-8 md:w-1/2 lg:px-24 max-w-2xl mx-auto">
       

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 max-w-xs">Welcome back! Please enter your details to login</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={`rounded-lg border px-4 py-3 outline-none focus:ring-1 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
              {...register('email')}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-1 ${
                  errors.password
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-primary focus:ring-primary'
                }`}
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                {...register('rememberMe')}
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember for 30 days
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
          
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>

      {/* Right Side - Image & Quote */}
      <div className="hidden w-1/2 bg-gray-900 md:block relative overflow-hidden">
        <img
          src={IMAGES.LOGIN}
           alt="Soldier"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-12 left-12 right-12 rounded-2xl bg-black/30 p-8 backdrop-blur-md border border-white/10 text-white max-w-2xl mx-auto">
          <blockquote className="mb-6 text-xl font-medium leading-relaxed">
            "The citizens are inured with the correlative constitutional right to acquire arms, to keep and to bear them in anticipation of national defence."
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-xl">Dr. Ishmael Norman</div>
              <div className="text-sm text-gray-300">Ghanaian security scholar</div>
            </div>
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
                <ArrowLeft size={20} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
