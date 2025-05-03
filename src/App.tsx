import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/home/Home';
import LeaderBoard from './Components/pages/leader-board/LeaderBoard';
import Shop from './Components/pages/shop/Shop';
import OnlineStatus from './Components/atoms/onlineStatus/onlineStatus';


const App = () => {
  return (
    <>
    <OnlineStatus />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;