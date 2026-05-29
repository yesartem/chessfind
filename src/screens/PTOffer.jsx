import { useNavigate, useParams } from 'react-router-dom'
import Btn from '../components/Btn.jsx'
import Card from '../components/Card.jsx'

const offers = {
  1: {
    headline: ['Tonight at ', 'Caffè Reale', '?'],
    venue: 'Caffè Reale',
    time: '20:00',
    walk: '~8 min walk',
    addr: 'VIA PO 12 · CENTRO',
    extra: null,
  },
  2: {
    headline: ['Or ', 'Bar Roma', ' at 18:00?'],
    venue: 'Bar Roma',
    time: '18:00',
    walk: '~3 min walk',
    addr: 'PIAZZA CASTELLO · 2 ALREADY KEEN',
    extra: null,
  },
  3: {
    headline: ['What about ', 'Club HQ', ' at 21:00?'],
    venue: 'Club HQ',
    time: '21:00',
    walk: '~12 min walk',
    addr: 'VIA ROMA 1 · SAN SALVARIO',
    extra: null,
  },
}

export default function PTOffer() {
  const { n } = useParams()
  const num = parseInt(n, 10)
  const navigate = useNavigate()
  const offer = offers[num] || offers[1]

  const nextOffer = num < 3 ? `/pt/offer/${num + 1}` : '/pt/nothing'

  return (
    <div className="screen screen-enter flex flex-col px-5 pt-10">
      {/* Step label */}
      <p className="font-mono text-[11px] tracking-widest text-accent uppercase text-center mb-5">
        Offer {num} of 3
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mb-7">
        {[1,2,3,4].map(i => (
          <div
            key={i}
            className={i === 1 ? 'rounded-pill' : 'rounded-full'}
            style={{
              width: i === num + 1 ? 24 : 6,
              height: 6,
              background: i <= num ? '#C6F24E' : '#262826',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>

      <h1 className="font-display font-extrabold text-[32px] leading-tight text-primary mb-6">
        {offer.headline[0]}
        <span style={{ color: '#C6F24E' }}>{offer.headline[1]}</span>
        {offer.headline[2]}
      </h1>

      <Card className="mb-6">
        <div className="font-display font-bold text-[17px] text-primary mb-1">{offer.venue}</div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono font-bold text-[14px] text-accent">{offer.time}</span>
          <span className="text-secondary text-[13px]">· {offer.walk}</span>
        </div>
        <p className="font-mono text-[11px] tracking-wider text-secondary uppercase">{offer.addr}</p>
      </Card>

      <div className="flex flex-col gap-3">
        <Btn variant="secondary" onClick={() => navigate(nextOffer)}>No</Btn>
        <button
          onClick={() => navigate(nextOffer)}
          className="text-center text-secondary text-[14px] pressable py-2"
        >
          Change time or place
        </button>
        <Btn onClick={() => navigate('/waiting')}>Yes, I'm in</Btn>
      </div>
    </div>
  )
}
