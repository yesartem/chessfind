import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Connecting() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/city'), 2200)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="screen screen-enter flex flex-col items-center justify-center gap-8 px-5">
      {/* Pulsing circles */}
      <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
        <div
          className="absolute rounded-full animate-pulse-ring"
          style={{ width: 110, height: 110, border: '1.5px solid #C6F24E' }}
        />
        <div
          className="absolute rounded-full animate-pulse-ring-2"
          style={{ width: 80, height: 80, border: '1.5px solid #C6F24E' }}
        />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center animate-pulse-fill"
          style={{ background: '#C6F24E' }}
        >
          <span style={{ fontSize: 24 }}>♞</span>
        </div>
      </div>

      <div className="text-center">
        <p className="font-mono text-secondary text-[13px] tracking-widest uppercase mb-2">Connecting</p>
        <h2 className="font-display font-bold text-[22px] text-primary">Lichess</h2>
      </div>
    </div>
  )
}
