import { Breadcrumps, Footer ,Hero ,Navbar } from "@components/common"
import { Wallet,EthRates } from "@components/web3"
import { OrderCard } from "@components/order"
import { CourseList } from "@components/course"



export default function Home() {
  return(
    <div>
    <div className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">

        {/*------ NAVBAR STARTS ------*/}
        <Navbar />
        <div className="fit">
          {/*------ HERO STARTS ------*/}
          <Hero/>
          {/*------ BREADCRUMBS STARTS ------*/}
          <Breadcrumps/>
          {/*------ ADDRESS STARTS ------*/}
          <Wallet/>
          {/*------ CURRENCY STARTS ------*/}
          <EthRates/>
          {/*------ ORDER INFO STARTS ------*/}
          <OrderCard/>
          {/*------ COURSE CARD STARTS ------*/}
          <CourseList/>
        </div>
      </div>
      {/*------ FOOTER STARTS ------*/}
      <>
      <Footer/>
      </>
    </div>
  </div>
  )  
}
