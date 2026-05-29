import { useNavigate } from 'react-router-dom'

export default function PTType() {
  const navigate = useNavigate()

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      {/* Step label */}
      <p className="font-mono text-[11px] tracking-widest text-accent uppercase text-center mb-6">
        Play Tonight
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-6 h-1.5 rounded-pill" style={{ background: '#C6F24E' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#262826' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#262826' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#262826' }} />
      </div>

      <h1 className="font-display font-extrabold text-[34px] leading-tight text-primary mb-3 text-center">
        What kind of<br />game?
      </h1>
      <p className="text-secondary text-[15px] text-center mb-10 leading-snug">
        Rated needs a linked account.<br />Casual is open to anyone.
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/pt/offer/1')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable flex items-center justify-center gap-2"
          style={{ background: '#1A1C1A', color: '#F4F5F1', border: '1px solid #262826' }}
        >
          <span>♜</span> Casual · just for fun
        </button>
        <button
          onClick={() => navigate('/pt/offer/1')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable flex items-center justify-center gap-2"
          style={{ background: '#C6F24E', color: '#0A0A0A' }}
        >
          <span>⚡</span> Rated · affects your rating
        </button>
      </div>
    </div>
  )
}
