import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

const options = [
  { id: 'open',        label: 'Open to games',      sub: 'Appear in matches and rankings' },
  { id: 'tournament',  label: 'Tournaments only',   sub: 'Join events, invisible for casual matching' },
  { id: 'hidden',      label: 'Hidden',             sub: 'Stay invisible · you can still browse' },
]

export default function Visibility() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('open')

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-3">
        Be visible to<br />other players?
      </h1>
      <p className="text-secondary text-[15px] leading-snug mb-7">
        Only visible players appear in matching<br />and local rankings.
      </p>

      <div className="flex flex-col gap-3 mb-6">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className="text-left rounded-card p-4 pressable flex items-start justify-between"
            style={{
              background: '#121312',
              border: selected === opt.id ? '1.5px solid #C6F24E' : '1px solid #1A1C1A',
            }}
          >
            <div>
              <div className="font-display font-semibold text-[15px] text-primary">{opt.label}</div>
              <div className="text-secondary text-[13px] mt-0.5">{opt.sub}</div>
            </div>
            {selected === opt.id && (
              <div className="w-2.5 h-2.5 rounded-full mt-1 ml-3 flex-shrink-0" style={{ background: '#C6F24E' }} />
            )}
          </button>
        ))}
      </div>

      <button className="text-center text-secondary text-[13px] pressable py-2 mb-3">
        → TO HOME SCREEN
      </button>
      <Btn onClick={() => navigate('/home')}>Finish</Btn>
    </div>
  )
}
