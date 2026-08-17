function InputField({ label, icon: Icon, endAdornment, className = '', ...inputProps }) {
  return (
    <div className={className}>
      <label htmlFor={inputProps.id} className="mb-2.5 block text-sm font-semibold text-[#354055]">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
        )}
        <input
          {...inputProps}
          className={`min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 text-base text-[#20283b] outline-none transition placeholder:text-slate-400 focus:border-[#5146e5] focus:ring-4 focus:ring-[#5146e5]/10 ${Icon ? 'pl-13' : ''} ${endAdornment ? 'pr-14' : ''}`}
        />
        {endAdornment && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">{endAdornment}</div>
        )}
      </div>
    </div>
  )
}

export default InputField