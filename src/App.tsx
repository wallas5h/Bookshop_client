import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AddBookContainer, BookContainer, CartContainer, Register, RemindPassword, SearchContainer, WishlistContainer } from './components';
import { LoginContainer } from './components/login/LoginContainer';
import { HomeContainer } from './containers/home/HomeContainer';


function App() {

  return (
    // <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/addbook' element={<AddBookContainer />} />
        <Route path='/book' element={<BookContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/login/remind' element={<RemindPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<SearchContainer />} />
        <Route path='/wishlist' element={<WishlistContainer />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
    // </Provider>
  );
}

export default App;
