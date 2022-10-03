import './App.css';
import Home from './views/Home'
import Login from './views/Login'
import Button from './views/Button'
import {Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/button" element={<Button/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
