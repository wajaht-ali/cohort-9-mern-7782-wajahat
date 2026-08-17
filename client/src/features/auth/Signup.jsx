import { useState } from 'react'
import { FiArrowRight, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import InputField from '../../components/ui/InputField'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="w-full max-w-xl">
      <header className="mb-9">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#20283b] sm:text-4xl">
          Create your account
        </h2>
        <p className="mt-3 text-lg text-slate-500">Start organizing your thoughts with Notecraft</p>
      </header>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          id="name"
          name="name"
          type="text"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          icon={FiUser}
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <InputField
          id="signup-email"
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
          id="signup-password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••••••"
          autoComplete="new-password"
          icon={FiLock}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit" className="mt-2 w-full">
          Create account
          <FiArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </form>

      <p className="mt-10 text-center text-base text-slate-500">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold text-[#5146e5] hover:text-[#3d32c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5146e5]/40"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default Signup