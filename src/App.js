
import './App.css';
import Typemed from './components/Typemed';
import Typehard from './components/Typehard';
import Homepage from './components/Homepage';

import Typepage from './components/TypingPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Homepage/> */}
     <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/start1" element={<Typepage/>}/>
            <Route path="/start2" element={<Typemed/>}/>
            <Route path="/start3" element={<Typehard/>}/>
            {/* <Route path="/home" element={<Homepage/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
