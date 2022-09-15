import { Blog, Deal, Featured, Footer, Home, Icons, Newsletter, Review } from '../../components';
import { Header } from '../header/Header';


export const HomeContainer = () => {


  return (
    <>
      <Header />
      <Home />
      <Icons />
      <Featured />
      <Newsletter />
      <Deal />
      <Review />
      <Blog />
      <Footer />
    </>
  )
}