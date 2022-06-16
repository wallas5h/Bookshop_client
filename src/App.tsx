import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { CartContainer, Login, Register, RemindPassword, WishlistContainer } from './components';
import { HomeContainer } from './containers/home/HomeContainer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/wishlist' element={<WishlistContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/remind' element={<RemindPassword />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
