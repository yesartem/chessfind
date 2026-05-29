import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

const days  = ['Tonight', 'Tomorrow', 'Pick a day']
const times = ['18:00', '19:00', '20:00', '21:00', 'CUSTOM']

export default function When() {
  const navigate = useNavigate()
  const [day,  setDay]  = useState('Tonight')
  const [time, setTime] = useState('20:00')

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-8">
        When do you<br />want to play?
      </h1>

      <div className="flex flex-col gap-3 mb-4">
        {days.map(d => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className="w-full py-3.5 rounded-pill font-display font-semibold text-[16px] pressable text-left px-5"
            style={{
              background: day === d ? '#C6F24E' : '#121312',
              color: day === d ? '#0A0A0A' : '#F4F5F1',
              border: day === d ? 'none' : '1px solid #262826',
            }}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        {times.map(t => (
          <button
            key={t}
            onClick={() => setTime(t)}
            className="w-full py-3 rounded-btn font-mono font-medium text-[15px] pressable text-left px-5"
            style={{
              background: time === t ? '#C6F24E' : '#121312',
              color: time === t ? '#0A0A0A' : '#F4F5F1',
              border: time === t ? 'none' : '1px solid #262826',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-6">
        Time is approximate · opponent confirms
      </p>

      <Btn onClick={() => navigate('/play/where')}>Next</Btn>
    </div>
  )
}
