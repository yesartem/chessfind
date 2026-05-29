import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'
import Card from '../components/Card.jsx'

const details = [
  { label: 'WHERE', value: 'Caffè Reale', accent: false },
  { label: 'WHEN',  value: '20:00',       accent: true  },
  { label: 'YOU PLAY', value: '⬤  White', accent: false },
  { label: 'GAME',  value: 'Rated · 10+5', accent: false },
]

export default function MatchFound() {
  const navigate = useNavigate()

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-10">
      {/* Status */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full" style={{ background: '#C6F24E' }} />
        <span className="font-mono text-[11px] tracking-widest text-accent uppercase">Match Found</span>
      </div>

      <h1 className="font-display font-extrabold text-[32px] text-primary mb-6">Someone joined.</h1>

      {/* Opponent card */}
      <Card className="mb-5 flex flex-col items-center text-center gap-2 py-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-[28px] mb-1"
          style={{ background: '#1A1C1A', color: '#F4F5F1' }}
        >
          M
        </div>
        <div className="font-display font-bold text-[20px] text-primary">Marco</div>
        <p className="font-mono text-[11px] tracking-widest text-accent uppercase">Chessfind ~1480</p>
        <p className="text-secondary text-[12px]">✓  VERIFIED · LICHESS LINKED</p>
        <p className="text-secondary text-[14px] leading-snug mt-1 italic">
          "I play the Queen's Gambit. Love a long endgame."
        </p>
      </Card>

      {/* Game details */}
      <div className="flex flex-col gap-2 mb-6">
        {details.map(d => (
          <Card key={d.label}>
            <p className="font-mono text-[10px] tracking-widest text-secondary uppercase mb-0.5">{d.label}</p>
            <span
              className="font-display font-semibold text-[16px]"
              style={{ color: d.accent ? '#C6F24E' : '#F4F5F1' }}
            >
              {d.value}
            </span>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pb-8">
        <Btn variant="secondary" onClick={() => navigate('/opp-cancelled')}>Can't make it</Btn>
        <Btn onClick={() => navigate('/confirmed')}>I'll be there</Btn>
      </div>
    </div>
  )
}
