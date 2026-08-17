import { useState } from 'react'
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import InputField from '../../components/ui/InputField'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="w-full max-w-xl">
      <header className="mb-9">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#20283b] sm:text-4xl">Welcome back</h2>
        <p className="mt-3 text-lg text-slate-500">Sign in to continue to Notecraft</p>
      </header>

      {/* <Button type="button" variant="secondary" className="w-full">
        <FcGoogle className="h-6 w-6" aria-hidden="true" />
        Continue with Google
      </Button> */}

      {/* <div className="my-9 flex items-center gap-4 text-sm text-slate-400" role="separator">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="shrink-0">or continue with email</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div> */}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          autoComplete="email"
          icon={FiMail}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label={
            <span className="flex items-center justify-between gap-4">
              <span>Password</span>
              <Link
                to="/forgot-password"
                className="font-semibold text-[#5146e5] hover:text-[#3d32c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5146e5]/40"
              >
                Forgot password?
              </Link>
            </span>
          }
          placeholder="••••••••••••"
          autoComplete="current-password"
          icon={FiLock}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              className="rounded-lg p-1 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5146e5]/40"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
            >
              {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
            </button>
          }
        />

        <label className="flex cursor-pointer items-center gap-3 text-sm text-[#354055]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="h-5 w-5 rounded-md border-slate-300 accent-[#5146e5] focus:ring-2 focus:ring-[#5146e5]/30"
          />
          Remember me for 30 days
        </label>

        <Button type="submit" className="mt-2 w-full">
          Sign in
          <FiArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </form>

      <p className="mt-10 text-center text-base text-slate-500">
        Don&apos;t have an account?{' '}
        <Link
          to="/signup"
          className="font-semibold text-[#5146e5] hover:text-[#3d32c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5146e5]/40"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}

export default Login