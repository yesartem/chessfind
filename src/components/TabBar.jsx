import { useNavigate, useLocation } from 'react-router-dom'

const ExploreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15 9l-2.5 5.5L7 17l2.5-5.5L15 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)
const MatchesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 8h12M6 12h8M6 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)
const EventsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function TabBar({ active }) {
  const navigate = useNavigate()

  const tabs = [
    { id: 'explore',  label: 'Explore',  Icon: ExploreIcon,  path: '/home' },
    { id: 'matches',  label: 'My Games', Icon: MatchesIcon,  path: '/home' },
    { id: 'fab',      label: '',         Icon: null,         path: '/pt/type' },
    { id: 'events',   label: 'Events',   Icon: EventsIcon,   path: '/home' },
    { id: 'profile',  label: 'Profile',  Icon: ProfileIcon,  path: '/profile' },
  ]

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-end"
      style={{ height: 64, background: '#0A0A0A', borderTop: '1px solid #1A1C1A' }}
    >
      {tabs.map(tab => {
        if (tab.id === 'fab') {
          return (
            <button
              key="fab"
              onClick={() => navigate('/pt/type')}
              className="flex-1 flex justify-center pressable"
              style={{ marginBottom: 10 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: '#C6F24E' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l4 4 6-8" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          )
        }
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="flex-1 flex flex-col items-center justify-end gap-1 pb-2 pressable"
            style={{ color: isActive ? '#C6F24E' : '#5A5E57' }}
          >
            <tab.Icon />
            <span className="text-[10px] font-mono tracking-wide">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
