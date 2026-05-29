export default function Card({ children, className = '', onClick, accent = false }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-card p-4 ${onClick ? 'pressable' : ''} ${className}`}
      style={{
        background: '#121312',
        border: accent ? '1.5px solid #C6F24E' : '1px solid #1A1C1A',
      }}
    >
      {children}
    </div>
  )
}
