import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/auth" element={<Register/>} />
        <Route path="/auth/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
