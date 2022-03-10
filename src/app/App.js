import '../styles/App.scss'
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import Reports from '../pages/Reports';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/reports' exact component={Reports} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
