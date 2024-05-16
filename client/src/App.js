import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Applicant from './pages/applicant/Applicant';
import PassportPhotograph from './pages/passportPhotograph/PassportPhotograph';
import Education from './pages/education/Education';
import Summary from './pages/summary/Summary';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/passport" element={<PassportPhotograph />} />
        <Route path="/education" element={<Education />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
