import './App.css';
import AddPhone from './components/AddPhone';
import Avatar from './components/Avatar';
import PhoneBox from './components/Phonebox';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneBox />}></Route>
        <Route path="/add" element={<AddPhone />}></Route>
        <Route path="/avatar" element={<Avatar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
