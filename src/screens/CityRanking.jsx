import { useNavigate } from 'react-router-dom'
import TabBar from '../components/TabBar.jsx'

const players = [
  { rank: 1, initial: 'E', name: 'Erik N.',    rating: 1612,  delta: null,  isYou: false },
  { rank: 2, initial: 'I', name: 'Isabel M.',  rating: 1580,  delta: null,  isYou: false },
  { rank: 3, initial: 'M', name: 'Marco B.',   rating: '~1480', delta: null, isYou: false },
  { rank: 4, initial: 'S', name: 'Sofia',      rating: 1495,  delta: '+35', isYou: false },
  { rank: 5, initial: 'A', name: 'You · 1460', rating: null,  delta: null,  isYou: true  },
  { rank: 6, initial: 'L', name: 'Luca P.',    rating: 1455,  delta: null,  isYou: false },
]

export default function CityRanking() {
  const navigate = useNavigate()

  return (
    <div className="screen" style={{ background: '#0A0A0A' }}>
      <div className="screen-content px-5 pt-12 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-extrabold text-[34px] text-primary">Turin</h1>
          <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mt-1">
            Local ranking · 38 players
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {players.map(p => (
            <div
              key={p.rank}
              className="flex items-center gap-3 rounded-card px-4 py-3"
              style={{
                background: p.isYou ? '#141C0C' : '#121312',
                border: p.isYou ? '1.5px solid #C6F24E' : '1px solid #1A1C1A',
              }}
            >
              {/* Rank */}
              <span
                className="font-mono text-[13px] w-5 flex-shrink-0"
                style={{ color: '#5A5E57' }}
              >
                {p.rank}
              </span>

              {/* Avatar */}
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-display font-bold text-[13px] flex-shrink-0"
                style={{ background: '#1A1C1A', color: p.isYou ? '#C6F24E' : '#F4F5F1' }}
              >
                {p.initial}
              </div>

              {/* Name + rating */}
              <div className="flex-1 min-w-0">
                <div
                  className="font-display font-semibold text-[15px]"
                  style={{ color: p.isYou ? '#C6F24E' : '#F4F5F1' }}
                >
                  {p.name}
                </div>
                {p.rating && (
                  <p className="font-mono text-[12px] text-secondary">{p.rating}</p>
                )}
              </div>

              {/* Delta or Challenge */}
              {p.delta && (
                <span className="font-mono font-bold text-[13px] text-accent mr-2">{p.delta}</span>
              )}
              {!p.isYou && (
                <button
                  onClick={() => navigate(`/challenge/${p.name.replace(' ', '-').toLowerCase()}`)}
                  className="px-3 py-1.5 rounded-btn font-display font-semibold text-[13px] pressable"
                  style={{ background: '#1A1C1A', color: '#F4F5F1', border: '1px solid #262826' }}
                >
                  Challenge
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <TabBar active="explore" />
    </div>
  )
}
