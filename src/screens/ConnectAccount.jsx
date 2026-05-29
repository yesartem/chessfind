import { useNavigate } from 'react-router-dom'
import Card from '../components/Card.jsx'

export default function ConnectAccount() {
  const navigate = useNavigate()
  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-3">
        Connect your<br />chess profile
      </h1>
      <p className="text-secondary text-[15px] leading-snug mb-8">
        We use your rating to find fair matches.<br />Rated games need a linked account.
      </p>

      <div className="flex flex-col gap-3">
        <Card onClick={() => navigate('/connecting')} className="pressable">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-[13px]"
              style={{ background: '#1a2a0a', color: '#C6F24E' }}
            >
              Li
            </div>
            <span className="font-display font-medium text-[16px] text-primary">Connect Lichess</span>
          </div>
        </Card>

        <Card onClick={() => navigate('/connecting')} className="pressable">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-[13px]"
              style={{ background: '#1A1C1A', color: '#8B8F86' }}
            >
              CC
            </div>
            <span className="font-display font-medium text-[16px] text-primary">Connect Chess.com</span>
          </div>
        </Card>
      </div>

      <button
        onClick={() => navigate('/city')}
        className="text-center text-secondary text-[14px] pressable py-3 mt-4"
      >
        Skip for now · casual only
      </button>
    </div>
  )
}
