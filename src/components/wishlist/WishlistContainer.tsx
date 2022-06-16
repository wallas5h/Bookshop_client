import { Featured } from "../featured/Featured"
import { Footer } from "../footer/Footer"
import { Header_1 } from "../header_1/Header_1"
import { WishlistResume } from "./WishlistResume"


export const WishlistContainer = () => {


  return (
    <>
      <Header_1 />
      <WishlistResume />
      <Featured />
      <Footer />
    </>
  )
}