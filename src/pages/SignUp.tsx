import { useState } from 'react'
import { Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react'
import { IMAGES } from '../assets/images'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Link } from 'react-router-dom'

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignUpFormValues = z.infer<typeof signUpSchema>

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: SignUpFormValues) => {
    // TODO: Implement actual sign up logic
    console.log('Sign up data:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center bg-white px-8 md:w-1/2 lg:px-24 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">Create an account</h1>
          <p className="text-gray-500 max-w-xs">Please enter your details to sign up</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`rounded-lg border px-4 py-3 outline-none focus:ring-1 ${
                errors.name
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
              {...register('name')}
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name.message}</span>
            )}
          </div>

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

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-1 ${
                  errors.confirmPassword
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-primary focus:ring-primary'
                }`}
                {...register('confirmPassword')}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
          >
            {isSubmitting ? 'Creating account...' : 'Sign up'}
          </button>
          
          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Sign in
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
