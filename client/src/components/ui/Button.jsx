const variantClasses = {
  primary:
    'bg-[#5146e5] text-white shadow-lg shadow-indigo-500/20 hover:bg-[#4539d5] focus-visible:ring-[#5146e5]/40',
  secondary:
    'border border-slate-200 bg-white text-[#20283b] shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-300',
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex min-h-13 items-center justify-center gap-3 rounded-2xl px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button