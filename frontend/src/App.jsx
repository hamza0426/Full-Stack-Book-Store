import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import AllBooks from './pages/AllBooks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element= { <Home /> } />
        <Route path='/all-books' element= { <AllBooks /> } />
        <Route path='/login' element= { <Login /> } />
        <Route path='/sign-up' element= { <SignUp /> } />
      </Routes>
      <Footer />
      </Router>

      
    </div>
  );
}

export default App