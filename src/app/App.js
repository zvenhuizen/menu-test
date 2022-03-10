import '../assets/styles/Main.scss'
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import Reports from '../pages/Reports';
import Header from './Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
