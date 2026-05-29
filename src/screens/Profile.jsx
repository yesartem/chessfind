import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabBar from '../components/TabBar.jsx'
import Card from '../components/Card.jsx'

const games = [
  { id: 1, opponent: 'vs Marco B.', avatar: 'M', bg: '#1A1C1A', meta: 'Caffè Reale · Rated · May 24', delta: '+8', win: true },
  { id: 2, opponent: 'vs Sofia',    avatar: 'S', bg: '#FF5247',  meta: 'Club HQ · Rated · May 21',    delta: '-6', win: false },
  { id: 3, opponent: 'vs Luca P.',  avatar: 'L', bg: '#1A1C1A',  meta: 'Bar Roma · Casual · May 18',  delta: null, win: null },
]

const ratings = [
  { platform: 'CHESSFIND', value: '1460', accent: true },
  { platform: 'LICHESS',   value: '1502', accent: false },
  { platform: 'CHESS.COM', value: '1438', accent: false },
]

export default function Profile() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true)

  return (
    <div className="screen" style={{ background: '#0A0A0A' }}>
      <div className="screen-content flex flex-col">
        {/* Hero */}
        <div
          className="w-full flex items-end justify-center"
          style={{ background: '#C6F24E', height: 160, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
        >
          <div
            className="mb-[-28px] w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-[24px]"
            style={{ background: '#0A0A0A', color: '#C6F24E' }}
          >
            A
          </div>
        </div>

        <div className="px-5 pt-12 flex flex-col gap-4">
          {/* Name */}
          <div className="text-center">
            <h2 className="font-display font-bold text-[22px] text-primary">Artem O.</h2>
            <p className="font-mono text-[11px] tracking-widest text-secondary uppercase">@ARTEM · TURIN</p>
          </div>

          {/* Edit profile button */}
          <button
            className="w-full py-3 rounded-pill font-display font-semibold text-[15px] pressable"
            style={{ background: '#C6F24E', color: '#0A0A0A' }}
          >
            Edit profile
          </button>

          {/* Ratings */}
          {ratings.map(r => (
            <Card key={r.platform}>
              <div>
                <span
                  className="font-mono font-bold text-[28px]"
                  style={{ color: r.accent ? '#C6F24E' : '#F4F5F1' }}
                >
                  {r.value}
                </span>
                <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mt-0.5">{r.platform}</p>
              </div>
            </Card>
          ))}

          {/* Visibility toggle */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display font-semibold text-[15px] text-primary">Visible to players</div>
                <p className="font-mono text-[10px] tracking-widest text-secondary uppercase mt-0.5">
                  Open to games · tournament-ready
                </p>
              </div>
              <button
                onClick={() => setVisible(v => !v)}
                className={`toggle ${visible ? 'on' : ''}`}
              />
            </div>
          </Card>

          {/* Recent Games */}
          <p className="font-mono text-[11px] tracking-widest text-secondary uppercase">Recent games</p>
          <div className="flex flex-col gap-3">
            {games.map(g => (
              <Card key={g.id}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-[14px] flex-shrink-0"
                    style={{ background: g.bg, color: '#F4F5F1' }}
                  >
                    {g.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-[15px] text-primary">{g.opponent}</span>
                      {g.delta && (
                        <span
                          className="font-mono font-bold text-[13px]"
                          style={{ color: g.win ? '#C6F24E' : '#FF5247' }}
                        >
                          {g.delta}
                        </span>
                      )}
                    </div>
                    <p className="text-secondary text-[12px] mt-0.5">{g.meta}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="profile" />
    </div>
  )
}
