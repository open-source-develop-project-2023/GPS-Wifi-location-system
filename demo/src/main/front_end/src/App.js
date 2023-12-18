import './App.css';
import MyCalendar from './components/MyCalendar';
import MakePromise from './components/MakePromise';
import CheckPromise from './components/CheckPromise/CheckPromise';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<MyCalendar />} />
          <Route path="/make_promise/:date" element={<MakePromise />} />
          <Route path="/check_promise/:date" element={<CheckPromise />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
