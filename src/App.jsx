import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome        from './screens/Welcome.jsx'
import ConnectAccount from './screens/ConnectAccount.jsx'
import Connecting     from './screens/Connecting.jsx'
import YourCity       from './screens/YourCity.jsx'
import Visibility     from './screens/Visibility.jsx'
import Home           from './screens/Home.jsx'
import Profile        from './screens/Profile.jsx'
import CityRanking    from './screens/CityRanking.jsx'
import PTType         from './screens/PTType.jsx'
import PTOffer        from './screens/PTOffer.jsx'
import PTNothing      from './screens/PTNothing.jsx'
import Waiting        from './screens/Waiting.jsx'
import MatchFound     from './screens/MatchFound.jsx'
import Confirmed      from './screens/Confirmed.jsx'
import OppCancelled   from './screens/OppCancelled.jsx'
import Result         from './screens/Result.jsx'
import When           from './screens/When.jsx'
import Where          from './screens/Where.jsx'
import Details        from './screens/Details.jsx'
import WaitingForOpp  from './screens/WaitingForOpp.jsx'
import ChallengeSheet from './screens/ChallengeSheet.jsx'
import ResultStatus   from './screens/ResultStatus.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#050505' }}>
      <div className="phone-shell rounded-[40px] shadow-2xl">
        <Routes>
          <Route path="/"                  element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome"           element={<Welcome />} />
          <Route path="/connect"           element={<ConnectAccount />} />
          <Route path="/connecting"        element={<Connecting />} />
          <Route path="/city"              element={<YourCity />} />
          <Route path="/visibility"        element={<Visibility />} />
          <Route path="/home"              element={<Home />} />
          <Route path="/profile"           element={<Profile />} />
          <Route path="/ranking"           element={<CityRanking />} />
          <Route path="/pt/type"           element={<PTType />} />
          <Route path="/pt/offer/:n"       element={<PTOffer />} />
          <Route path="/pt/nothing"        element={<PTNothing />} />
          <Route path="/waiting"           element={<Waiting />} />
          <Route path="/match-found"       element={<MatchFound />} />
          <Route path="/confirmed"         element={<Confirmed />} />
          <Route path="/opp-cancelled"     element={<OppCancelled />} />
          <Route path="/result"            element={<Result />} />
          <Route path="/play/when"         element={<When />} />
          <Route path="/play/where"        element={<Where />} />
          <Route path="/play/details"      element={<Details />} />
          <Route path="/play/waiting"      element={<WaitingForOpp />} />
          <Route path="/challenge/:player"    element={<ChallengeSheet />} />
          <Route path="/result-status/:outcome" element={<ResultStatus />} />
        </Routes>
      </div>
    </div>
  )
}
