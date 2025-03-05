import './App.css';
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Footer } from './components';
import { Home,AllTrips,Trips,Trip} from './pages';


function App() {
  const openNav = (e) => {
    document.querySelector(".MNav").classList.add("isOpen")
    document.querySelector(".MNav").classList.remove("isClose")
  }
  return (
    <div className="App">
      <div onClick={openNav} className="openNav z-50 cursor-pointer bg-stone-500 p-3 text-2xl fixed top-4 left-4 text-stone-200 rounded-sm md:invisible">
        <FaBars />
      </div>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trips' element={<AllTrips />} />
          <Route path='/trips/:id' element={<Trips />} />
          <Route path='/trip/:id' element={<Trip />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
