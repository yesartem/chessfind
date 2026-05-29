import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

export default function YourCity() {
  const navigate = useNavigate()
  const [city, setCity] = useState('London')

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-2">
        Where do you<br />play?
      </h1>

      <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-3">City</p>

      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        className="w-full rounded-btn px-4 py-3.5 text-[16px] font-display text-primary outline-none mb-2"
        style={{ background: '#121312', border: '1px solid #1A1C1A' }}
      />
      <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-8">
        We'll show players and games near you.
      </p>

      <Btn onClick={() => navigate('/visibility')}>Next</Btn>
    </div>
  )
}
