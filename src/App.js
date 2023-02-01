import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main/main';
import Home from './component/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
