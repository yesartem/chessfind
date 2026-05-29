export default function Btn({ children, variant = 'primary', onClick, className = '' }) {
  const base = 'w-full py-4 rounded-pill font-display font-bold text-[17px] pressable flex items-center justify-center gap-2 transition-colors'
  const styles = {
    primary:   'bg-accent text-page',
    secondary: 'bg-raised text-primary border border-border',
    ghost:     'bg-transparent text-secondary',
    danger:    'bg-danger-tint text-danger border border-danger',
  }
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
