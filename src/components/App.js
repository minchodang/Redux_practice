import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../Routes/Detail';
import Home from '../Routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
