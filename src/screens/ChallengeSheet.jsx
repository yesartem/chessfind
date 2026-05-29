import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const playerData = {
  'sofia': { name: 'Sofia', rating: 1495, tags: 'PLAYS FRI RAPID' },
  'erik-n.': { name: 'Erik N.', rating: 1612, tags: 'VERIFIED' },
  'isabel-m.': { name: 'Isabel M.', rating: 1580, tags: 'LICHESS LINKED' },
  'marco-b.': { name: 'Marco B.', rating: '~1480', tags: 'CHESSFIND ~1480' },
  'luca-p.': { name: 'Luca P.', rating: 1455, tags: 'LOCAL' },
}

export default function ChallengeSheet() {
  const navigate = useNavigate()
  const { player } = useParams()
  const p = playerData[player] || { name: 'Player', rating: 1500, tags: 'LOCAL' }

  const [gameType, setGameType] = useState('Rated')
  const [when, setWhen]         = useState('Tonight')

  return (
    <div
      className="screen"
      style={{ background: '#0A0A0A' }}
      onClick={(e) => e.target === e.currentTarget && navigate('/ranking')}
    >
      {/* Dimmed background */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.5)' }}
        onClick={() => navigate('/ranking')}
      />

      {/* Sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-t-[24px] px-5 pt-5 pb-8 flex flex-col gap-5 animate-slide-up"
        style={{ background: '#121312', border: '1px solid #1A1C1A' }}
      >
        {/* Handle */}
        <div className="w-10 h-1 rounded-full mx-auto" style={{ background: '#262826' }} />

        <h2 className="font-display font-bold text-[22px] text-primary">Challenge</h2>

        {/* Player */}
        <div
          className="flex items-center gap-3 rounded-card px-4 py-3"
          style={{ background: '#1A1C1A' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-[16px]"
            style={{ background: '#262826', color: '#F4F5F1' }}
          >
            {p.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display font-semibold text-[15px] text-primary">{p.name}</div>
            <p className="font-mono text-[11px] tracking-wider text-secondary uppercase">{p.rating} · {p.tags}</p>
          </div>
          <div
            className="px-2.5 py-1 rounded-pill flex items-center gap-1.5"
            style={{ border: '1px solid #C6F24E' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C6F24E' }} />
            <span className="font-mono text-[10px] text-accent tracking-widest">VERIFIED</span>
          </div>
        </div>

        {/* Game type */}
        <div>
          <p className="font-mono text-[10px] tracking-widest text-secondary uppercase mb-3">Game type</p>
          <div className="flex gap-3">
            {['Rated', 'Casual'].map(t => (
              <button
                key={t}
                onClick={() => setGameType(t)}
                className="flex-1 py-3 rounded-pill font-display font-bold text-[15px] pressable"
                style={{
                  background: gameType === t ? '#C6F24E' : '#1A1C1A',
                  color: gameType === t ? '#0A0A0A' : '#F4F5F1',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* When */}
        <div>
          <p className="font-mono text-[10px] tracking-widest text-secondary uppercase mb-3">When</p>
          <div className="flex gap-3">
            {['Tonight', 'Tomorrow'].map(w => (
              <button
                key={w}
                onClick={() => setWhen(w)}
                className="px-4 py-2.5 rounded-pill font-display font-semibold text-[14px] pressable"
                style={{
                  background: when === w ? '#C6F24E' : '#1A1C1A',
                  color: when === w ? '#0A0A0A' : '#F4F5F1',
                }}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Venue */}
        <div>
          <p className="font-mono text-[10px] tracking-widest text-secondary uppercase mb-2">Venue</p>
          <div
            className="w-full px-4 py-3 rounded-btn font-display text-[15px] text-primary"
            style={{ background: '#1A1C1A' }}
          >
            Caffè Reale · 20:00
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/play/waiting')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable"
          style={{ background: '#C6F24E', color: '#0A0A0A' }}
        >
          Send challenge
        </button>
        <p className="font-mono text-[10px] tracking-widest text-secondary uppercase text-center">
          → WAITING FOR OPPONENT SCREEN
        </p>
        <button onClick={() => navigate('/ranking')} className="text-center text-secondary text-[14px] pressable py-1">
          Cancel
        </button>
      </div>
    </div>
  )
}
