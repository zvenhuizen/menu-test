import '../assets/styles/Main.scss'
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import Reports from '../pages/Reports';
import Header from './Header';
import CommandCenter from '../components/CommandCenter';

function App() {
  return (
    <div className='App'>
      <CommandCenter />
    </div>
  );
}

export default App;
