import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

const options = [
  { label: 'Draw',          outcome: 'draw' },
  { label: 'I lost',        outcome: 'lost' },
  { label: "We didn't play", outcome: null  },
]

export default function Result() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-10">
      {/* Header */}
      <p className="font-mono text-[11px] tracking-widest text-accent uppercase text-center mb-5">
        VS YOUR OPPONENT · CAFFÈ REALE
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-6 h-1.5 rounded-pill" style={{ background: '#C6F24E' }} />
        {[2,3,4].map(i => (
          <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: '#262826' }} />
        ))}
      </div>

      <h1 className="font-display font-extrabold text-[34px] leading-tight text-primary mb-3 text-center">
        How did<br />it go?
      </h1>
      <p className="text-secondary text-[14px] text-center leading-snug mb-8">
        Your opponent confirms too — then your<br />Chessfind rating updates.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        {options.map(({ label, outcome }) => (
          <button
            key={label}
            onClick={() => outcome ? navigate(`/result-status/${outcome}`) : navigate('/home')}
            className="w-full py-4 rounded-pill font-display font-semibold text-[16px] pressable"
            style={{
              background: selected === label ? '#1A1C1A' : '#121312',
              border: selected === label ? '1.5px solid #C6F24E' : '1px solid #262826',
              color: selected === label ? '#C6F24E' : '#8B8F86',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <Btn onClick={() => navigate('/result-status/won')}>I won</Btn>
    </div>
  )
}
