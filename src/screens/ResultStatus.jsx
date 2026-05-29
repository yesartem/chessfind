import { useNavigate, useParams } from 'react-router-dom'

const config = {
  won: {
    emoji: '🏆',
    headline: 'You won!',
    delta: '+18',
    deltaColor: '#C6F24E',
  },
  lost: {
    emoji: '📉',
    headline: 'You lost.',
    delta: '−12',
    deltaColor: '#FF5247',
  },
  draw: {
    emoji: '🤝',
    headline: 'It\'s a draw.',
    delta: '+2',
    deltaColor: '#8B8F86',
  },
}

export default function ResultStatus() {
  const navigate = useNavigate()
  const { outcome } = useParams()
  const c = config[outcome] || config.won

  return (
    <div className="screen screen-enter flex flex-col items-center justify-center px-5 text-center gap-6">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-hero flex items-center justify-center"
        style={{ background: '#1A1C1A' }}
      >
        <span style={{ fontSize: 36 }}>{c.emoji}</span>
      </div>

      {/* Outcome */}
      <div>
        <h1 className="font-display font-extrabold text-[34px] text-primary mb-1">{c.headline}</h1>
        <div
          className="font-mono font-bold text-[28px]"
          style={{ color: c.deltaColor }}
        >
          {c.delta}
        </div>
      </div>

      {/* Message */}
      <div>
        <p className="font-display font-semibold text-[18px] text-primary mb-2">
          Your rating has been updated!
        </p>
        <p className="text-secondary text-[14px] leading-snug">
          Both players confirmed. Your Chessfind<br />rating reflects the result.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-3 mt-2">
        <button
          onClick={() => navigate('/profile')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable"
          style={{ background: '#1A1C1A', color: '#F4F5F1', border: '1px solid #262826' }}
        >
          See my rating
        </button>
        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable"
          style={{ background: '#C6F24E', color: '#0A0A0A' }}
        >
          OK
        </button>
      </div>
    </div>
  )
}
