
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Routes/Footer/Footer';
import Header from './Routes/Header/Header';
import Home from './Routes/Home/Home';
import LogIn from './Routes/LogIn/LogIn';
import Register from './Routes/Register/Register';
import SocialLogIn from './Routes/SocialLogIn/SocialLogIn';
import OrderProceed from './Routes/OrderProceed/OrderProceed';
import NotFound from './Routes/NotFound/NotFound';
import YourOrder from './Routes/YourOrder/YourOrder';
import { ToastContainer } from 'react-bootstrap';
import RequiredAuth from './Routes/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/social' element={<SocialLogIn></SocialLogIn>}></Route>
        <Route path='/orderProceed/:locate' element={<RequiredAuth>
          <OrderProceed></OrderProceed>
        </RequiredAuth>}></Route>
        <Route path='/yourOrder' element={<YourOrder></YourOrder>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
