import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tour from './pages/Tour';
import "./App.css"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/:id" element={ <Tour />} />
      <Route path="/" element={ <Home />} />
    </Routes>
    </>
  );
}

export default App;
