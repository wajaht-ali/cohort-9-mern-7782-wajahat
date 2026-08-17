import { Link } from 'react-router-dom'

function AuthPlaceholder({ title, description }) {
  return (
    <div className="w-full max-w-xl text-center">
      <h1 className="text-4xl font-bold tracking-[-0.04em] text-[#20283b]">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-500">{description}</p>
      <Link
        to="/login"
        className="mt-8 inline-flex min-h-13 items-center justify-center rounded-2xl bg-[#5146e5] px-6 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-[#4539d5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5146e5]/30"
      >
        Return to sign in
      </Link>
    </div>
  )
}

export default AuthPlaceholder