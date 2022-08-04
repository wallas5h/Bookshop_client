import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AddBookContainer, BookContainer, CartContainer, Register, RemindPassword, SearchContainer, WishlistContainer } from './components';
import { LoginContainer } from './components/login/LoginContainer';
import { HomeContainer } from './containers/home/HomeContainer';

export const Routing = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/addbook' element={<AddBookContainer />} />
        <Route path='/book/:id' element={<BookContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/login/remind' element={<RemindPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<SearchContainer />} />
        <Route path='/wishlist' element={<WishlistContainer />} />
      </Routes>
    </>
  )
}