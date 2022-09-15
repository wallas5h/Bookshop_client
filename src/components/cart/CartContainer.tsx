import { Featured } from "../featured/Featured"
import { Footer } from "../footer/Footer"
import { Header_1 } from "../header_1/Header_1"
import { CardResume } from "./CardResume"


export const CartContainer = () => {


  return (
    <>
      <Header_1 />
      <CardResume />
      <Featured />
      <Footer />
    </>
  )
}