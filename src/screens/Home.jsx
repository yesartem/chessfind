import { useNavigate } from 'react-router-dom'
import TabBar from '../components/TabBar.jsx'
import Card from '../components/Card.jsx'

const events = [
  {
    id: 1,
    badge: { label: '87%', sub: 'FIT' },
    badgeBg: '#1a2a0a',
    title: 'Friday Rapid Night',
    meta: 'Tomorrow 19:00 · Club HQ',
    tags: ['Blitz', 'In person'],
    action: 'Join',
  },
  {
    id: 2,
    badge: { label: '+4', sub: 'ELO' },
    badgeBg: '#1a2a0a',
    title: '3 want to play tonight',
    meta: 'Centro · 20:00–22:00',
    tags: ['Blitz', 'In person'],
    action: null,
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="screen" style={{ background: '#0A0A0A' }}>
      <div className="screen-content px-5 pt-12 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-accent text-[10px]">●</span>
              <span className="font-display font-bold text-[22px] text-primary">Turin</span>
            </div>
            <p className="font-mono text-[11px] tracking-widest text-secondary uppercase">
              38 active players nearby
            </p>
          </div>
          <button
            onClick={() => navigate('/profile')}
            className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[15px] pressable"
            style={{ background: '#C6F24E', color: '#0A0A0A' }}
          >
            A
          </button>
        </div>

        {/* Hero CTA card */}
        <div
          className="relative rounded-hero p-5 overflow-hidden"
          style={{ background: '#C6F24E', minHeight: 160 }}
        >
          <div
            className="absolute right-4 top-[-16px] w-36 h-36 rounded-full opacity-20"
            style={{ background: '#0A0A0A' }}
          />
          <p className="font-mono text-[11px] tracking-widest text-page uppercase mb-2">Tonight</p>
          <h2 className="font-display font-extrabold text-[28px] leading-tight text-page mb-2">
            Play chess<br />tonight
          </h2>
          <p className="text-page opacity-70 text-[14px] mb-4">We find the opponent,<br />you just show up.</p>
          <button
            onClick={() => navigate('/pt/type')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-pill font-display font-bold text-[15px] pressable"
            style={{ background: '#0A0A0A', color: '#C6F24E' }}
          >
            Start →
          </button>
        </div>

        {/* Next Rival */}
        <div>
          <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-3">
            Your next rival
          </p>
          <Card onClick={() => navigate('/profile')}>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-[16px]"
                style={{ background: '#FF5247', color: 'white' }}
              >
                S
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-[15px] text-primary">Sofia</span>
                  <span className="font-mono text-[13px] text-accent">+35</span>
                </div>
                <p className="font-mono text-[11px] text-secondary tracking-wide truncate">
                  1495 · PLAYS FRI RAPID NIGHT · ABOVE YOU
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Happening Near You */}
        <div>
          <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-3">
            Happening near you
          </p>
          <div className="flex flex-col gap-3">
            {events.map(ev => (
              <Card key={ev.id}>
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                    style={{ background: ev.badgeBg }}
                  >
                    <span className="font-mono font-bold text-[13px] text-accent leading-none">{ev.badge.label}</span>
                    <span className="font-mono text-[10px] text-secondary tracking-widest">{ev.badge.sub}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display font-semibold text-[15px] text-primary leading-snug">{ev.title}</span>
                      {ev.action && (
                        <button
                          onClick={() => navigate('/waiting')}
                          className="px-3 py-1.5 rounded-pill font-display font-bold text-[13px] pressable flex-shrink-0"
                          style={{ background: '#C6F24E', color: '#0A0A0A' }}
                        >
                          {ev.action}
                        </button>
                      )}
                    </div>
                    <p className="text-secondary text-[13px] mt-0.5">{ev.meta}</p>
                    <div className="flex gap-2 mt-2">
                      {ev.tags.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-pill font-mono text-[11px] text-secondary"
                          style={{ background: '#1A1C1A' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="matches" />
    </div>
  )
}
