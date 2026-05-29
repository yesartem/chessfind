import { useNavigate } from 'react-router-dom'

export default function Waiting() {
  const navigate = useNavigate()

  return (
    <div className="screen screen-enter flex flex-col" style={{ background: '#0A0A0A' }}>
      {/* Animated ellipses: 1 outline + 2 filled */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        <div
          className="w-72 h-24 rounded-[50%]"
          style={{
            border: '1.5px solid #C6F24E',
            animation: 'pulse-ring 2s ease-in-out infinite',
          }}
        />
        <div
          className="w-72 h-24 rounded-[50%]"
          style={{ background: '#C6F24E', animation: 'pulse-fill 1.8s ease-in-out infinite' }}
        />
        <div
          className="w-72 h-16 rounded-[50%]"
          style={{ background: '#C6F24E', animation: 'pulse-fill 1.8s ease-in-out infinite 0.2s' }}
        />
      </div>

      {/* Bottom text + Ok button */}
      <div className="px-5 pb-12 flex flex-col items-center gap-6 text-center">
        <div>
          <h2 className="font-display font-extrabold text-[28px] text-primary mb-2">You're in.</h2>
          <p className="text-secondary text-[14px] leading-snug">
            We'll notify you the moment a compatible<br />player joins. You can close the app —<br />no need to wait here.
          </p>
        </div>
        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 rounded-pill font-display font-bold text-[17px] pressable"
          style={{ background: '#C6F24E', color: '#0A0A0A' }}
        >
          Ok
        </button>
      </div>
    </div>
  )
}
