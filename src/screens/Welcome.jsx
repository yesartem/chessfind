import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

export default function Welcome() {
  const navigate = useNavigate()
  return (
    <div className="screen screen-enter flex flex-col" style={{ background: '#0A0A0A' }}>
      {/* Hero ellipse */}
      <div className="flex-1 flex items-center justify-center" style={{ minHeight: 240 }}>
        <div
          className="w-72 h-48 rounded-[50%]"
          style={{ background: 'radial-gradient(ellipse at center, #1a2a0a 0%, #0A0A0A 80%)' }}
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-12 flex flex-col gap-5">
        {/* Logo row */}
        <div
          className="flex items-center justify-center px-4 py-3 rounded-hero"
          style={{ background: '#C6F24E' }}
        >
          <img
            src="/logo.png"
            alt="Chessfind"
            style={{ height: 28, filter: 'brightness(0)' }}
          />
        </div>

        {/* Headline */}
        <div>
          <h1 className="font-display font-extrabold text-[38px] leading-[1.05] text-primary mb-3">
            Find where to<br />play chess.
          </h1>
          <p className="text-secondary text-[16px] leading-snug">
            Real games. Real people.<br />Your city.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-2">
          <button
            onClick={() => navigate('/connect')}
            className="text-center text-secondary text-[14px] pressable py-2"
          >
            I already have an account
          </button>
          <Btn onClick={() => navigate('/connect')}>Get started</Btn>
        </div>
      </div>
    </div>
  )
}
