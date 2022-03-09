import { HashRouter as Router, Routes, Route } from "react-router-dom";

import MyProvider from "../context/MyProvider";
import Movies from "../components/pages/Movies";
import Player from "../components/Player";
import Trending from "../components/pages/Trending";
import Header from "../components/pages/Header";
import TrendingInf from "../components/pages/TrendingInf";

const Routings = () => (
  <MyProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/Player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/trendingInf" element={<TrendingInf />} />
      </Routes>
    </Router>
  </MyProvider>
);

export default Routings;
