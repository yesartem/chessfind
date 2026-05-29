import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../components/Btn.jsx'

export default function Details() {
  const navigate = useNavigate()
  const [gameType, setGameType]   = useState('Rated')
  const [timeCtrl, setTimeCtrl]   = useState('Rapid')
  const [hasBoard, setHasBoard]   = useState(true)

  const GameBtn = ({ label }) => (
    <button
      onClick={() => setGameType(label)}
      className="flex-1 py-3.5 rounded-pill font-display font-bold text-[15px] pressable"
      style={{
        background: gameType === label ? '#C6F24E' : '#121312',
        color: gameType === label ? '#0A0A0A' : '#F4F5F1',
        border: gameType === label ? 'none' : '1px solid #262826',
      }}
    >
      {label}
    </button>
  )

  const TimeBtn = ({ label }) => (
    <button
      onClick={() => setTimeCtrl(label)}
      className="w-full py-3.5 rounded-pill font-display font-bold text-[15px] pressable"
      style={{
        background: timeCtrl === label ? '#C6F24E' : '#121312',
        color: timeCtrl === label ? '#0A0A0A' : '#F4F5F1',
        border: timeCtrl === label ? 'none' : '1px solid #262826',
      }}
    >
      {label}
    </button>
  )

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-12">
      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-7">Game details</h1>

      {/* Game type */}
      <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-3">Game type</p>
      <div className="flex gap-3 mb-6">
        <GameBtn label="Rated" />
        <GameBtn label="Casual" />
      </div>

      {/* Time control */}
      <p className="font-mono text-[11px] tracking-widest text-secondary uppercase mb-3">Time control</p>
      <div className="flex flex-col gap-3 mb-6">
        <TimeBtn label="Rapid" />
        <TimeBtn label="Blitz" />
      </div>

      {/* Board toggle */}
      <div
        className="flex items-center justify-between rounded-card px-4 py-3.5 mb-4"
        style={{ background: '#121312', border: '1px solid #1A1C1A' }}
      >
        <div>
          <div className="font-display font-medium text-[15px] text-primary">I have a board</div>
          <div className="text-secondary text-[12px]">Bring your own set</div>
        </div>
        <button onClick={() => setHasBoard(v => !v)} className={`toggle ${hasBoard ? 'on' : ''}`} />
      </div>

      <button className="text-center font-mono text-[11px] tracking-widest text-secondary uppercase pressable py-2 mb-3">
        → TO WAITING SCREEN
      </button>

      <Btn onClick={() => navigate('/play/waiting')}>Find me a game</Btn>
    </div>
  )
}
