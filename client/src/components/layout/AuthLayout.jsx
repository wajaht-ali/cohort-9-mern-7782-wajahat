import { FiEdit3, FiLayers, FiLock, FiZap } from 'react-icons/fi'
import { Outlet } from 'react-router-dom'
import heroImage from '../../assets/hero.png'

const highlights = [
  { icon: FiZap, text: 'Lightning-fast search' },
  { icon: FiLock, text: 'End-to-end encrypted' },
  { icon: FiLayers, text: 'Well Organized' },
]

function AuthLayout() {
  return (
    <main className="grid min-h-screen bg-[#f8f8f7] lg:grid-cols-2">
      <aside className="relative hidden min-h-screen overflow-hidden bg-linear-to-br from-[#242c56] via-[#202a4a] to-[#18243a] px-10 py-10 text-white lg:flex lg:flex-col xl:px-[9%]">
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-2/3 w-2/3 object-cover opacity-[0.06] mix-blend-screen"
        />

        <div className="relative flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#5146e5] shadow-lg shadow-indigo-950/30">
            <FiEdit3 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-xl font-medium tracking-tight">Notecraft</span>
        </div>

        <div className="relative my-auto max-w-xl py-20">
          <h1 className="max-w-lg text-4xl font-bold xl:text-4xl">
            Your thoughts,
            <span className="block bg-linear-to-r from-[#8f8aff] to-[#6d7dff] bg-clip-text text-transparent">
              beautifully organized.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-slate-300/75">
            A distraction-free space for your ideas, notes, and everything in between.
          </p>

          <ul className="mt-10 space-y-5" aria-label="Notecraft features">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 text-base text-slate-300/75">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-300/10">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
        <Outlet />
      </section>
    </main>
  )
}

export default AuthLayout