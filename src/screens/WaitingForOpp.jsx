import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WaitingForOpp() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/match-found'), 4000)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="screen screen-enter flex flex-col" style={{ background: '#0A0A0A' }}>
      {/* Animated ellipses */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-72 h-24 rounded-[50%]"
            style={{
              border: '1.5px solid #C6F24E',
              animation: `pulse-ring ${1.8 + i * 0.3}s ease-in-out infinite ${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* Info panel */}
      <div className="px-5 pb-16 flex flex-col gap-5">
        <div
          className="w-12 h-8 rounded-btn flex items-center justify-center"
          style={{ background: '#1A1C1A' }}
        >
          <span className="text-secondary text-[18px] tracking-wider">···</span>
        </div>

        <div>
          <h2 className="font-display font-extrabold text-[26px] text-primary mb-2">
            Waiting for your<br />opponent to confirm...
          </h2>
          <p className="text-secondary text-[14px] leading-snug">
            Once they accept, you'll both get the<br />final match details.
          </p>
        </div>

        <div
          className="w-full py-3 rounded-pill flex items-center justify-center"
          style={{ border: '1.5px solid #C6F24E' }}
        >
          <span className="font-mono text-[11px] tracking-widest text-accent uppercase">
            Caffè Reale · 20:00 · Rated
          </span>
        </div>

        <button className="text-center text-secondary text-[14px] pressable py-2">
          Cancel my spot
        </button>
      </div>
    </div>
  )
}
