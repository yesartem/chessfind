import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

const venues = [
  { id: 1, name: 'Caffè Reale',  sub: '~8 MIN WALK · VIA PO 12 · CENTRO' },
  { id: 2, name: 'Bar Roma',     sub: '~3 MIN WALK · PIAZZA CASTELLO' },
  { id: 3, name: 'Club HQ',      sub: '~12 MIN WALK · VIA ROMA 1' },
]

export default function Where() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(1)

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-7">Where?</h1>

      <div className="flex flex-col gap-3 mb-4">
        {venues.map(v => (
          <button
            key={v.id}
            onClick={() => setSelected(v.id)}
            className="w-full text-left rounded-card p-4 pressable flex items-start justify-between"
            style={{
              background: '#121312',
              border: selected === v.id ? '1.5px solid #C6F24E' : '1px solid #1A1C1A',
            }}
          >
            <div>
              <div className="font-display font-semibold text-[16px] text-primary">{v.name}</div>
              <p className="font-mono text-[11px] tracking-wider text-secondary uppercase mt-1">{v.sub}</p>
            </div>
            {selected === v.id && (
              <div className="w-2.5 h-2.5 rounded-full mt-1 ml-3 flex-shrink-0" style={{ background: '#C6F24E' }} />
            )}
          </button>
        ))}
      </div>

      <button className="text-secondary text-[14px] pressable py-2 mb-6">Pick another place →</button>

      <Btn onClick={() => navigate('/play/details')}>Next</Btn>
    </div>
  )
}
