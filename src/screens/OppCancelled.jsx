import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

export default function OppCancelled() {
  const navigate = useNavigate()

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-8">
      {/* Danger badge */}
      <div
        className="w-full py-3 rounded-pill flex items-center justify-center mb-10"
        style={{ border: '1.5px solid #FF5247' }}
      >
        <span className="font-mono text-[14px] text-danger">✕</span>
      </div>

      <h1 className="font-display font-extrabold text-[34px] leading-tight text-primary mb-4">
        Marco had to<br />cancel.
      </h1>
      <p className="text-secondary text-[15px] leading-snug mb-10 text-center">
        It happens. Want another game?<br />We'll find someone right away.
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/home')}
          className="text-center text-secondary text-[14px] pressable py-2"
        >
          Maybe later
        </button>
        <button
          onClick={() => navigate('/pt/offer/1')}
          className="text-center font-mono text-[11px] tracking-widest text-secondary uppercase pressable py-2"
        >
          → LOOPS TO PLAY TONIGHT
        </button>
        <Btn onClick={() => navigate('/pt/offer/1')}>Find another opponent</Btn>
      </div>
    </div>
  )
}
