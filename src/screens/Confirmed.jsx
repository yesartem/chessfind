import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'
import Card from '../components/Card.jsx'

export default function Confirmed() {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(2 * 3600 + 14 * 60)

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [])

  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-8">
      {/* Confirmed badge */}
      <div
        className="w-full py-3 rounded-pill flex items-center justify-center gap-2 mb-8"
        style={{ border: '1.5px solid #C6F24E' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: '#C6F24E' }} />
        <span className="font-mono text-[12px] tracking-widest text-accent uppercase">Confirmed</span>
      </div>

      {/* Countdown */}
      <div className="text-center mb-2">
        <div className="font-mono font-bold text-[52px] text-accent leading-none">
          {h}h&nbsp;&nbsp;{String(m).padStart(2,'0')}m
        </div>
        <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mt-2">Until your game</p>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <Card>
          <div className="font-display font-bold text-[17px] text-primary mb-1">Caffè Reale</div>
          <p className="font-mono text-[11px] tracking-wider text-secondary uppercase mb-2">VIA PO 12 · CENTRO</p>
          <span className="text-accent text-[13px] font-display pressable">Open in maps →</span>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-[16px]"
              style={{ background: '#1A1C1A', color: '#F4F5F1' }}
            >
              M
            </div>
            <div>
              <div className="font-display font-semibold text-[15px] text-primary">Marco</div>
              <p className="font-mono text-[11px] tracking-widest text-secondary uppercase">Chessfind ~1480</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-3 mt-6 pb-8">
        <button
          onClick={() => navigate('/opp-cancelled')}
          className="text-center text-secondary text-[14px] pressable py-2"
        >
          Can't make it anymore
        </button>
        <Btn onClick={() => navigate('/result')}>I'm here</Btn>
      </div>
    </div>
  )
}
