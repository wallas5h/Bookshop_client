import { Blog, Deal, Featured, Home, Icons, Newsletter, Review } from '../../components';


export const HomeContainer = () => {


  return (
    <>
      <Home />
      <Icons />
      <Featured />
      <Newsletter />
      {/* <Arrivals /> */}
      <Deal />
      <Review />
      <Blog />

    </>
  )
}