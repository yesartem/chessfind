import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

export default function PTNothing() {
  const navigate = useNavigate()

  return (
    <div className="screen screen-enter flex flex-col items-center justify-center px-5 text-center">
      <div
        className="w-20 h-20 rounded-hero flex items-center justify-center mb-8"
        style={{ background: '#1A1C1A' }}
      >
        <span style={{ fontSize: 32 }}>🌙</span>
      </div>

      <h1 className="font-display font-extrabold text-[32px] text-primary mb-4">No worries.</h1>
      <p className="text-secondary text-[15px] leading-snug mb-10">
        Nothing fits tonight. Suggest your own<br />game, or we'll ping you when<br />something good comes up.
      </p>

      <div className="w-full flex flex-col gap-3">
        <Btn variant="secondary" onClick={() => navigate('/home')}>I'll play some other time</Btn>
        <Btn onClick={() => navigate('/play/when')}>Suggest my own game</Btn>
      </div>
    </div>
  )
}
