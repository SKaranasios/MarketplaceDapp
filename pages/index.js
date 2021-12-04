import { Breadcrumps,Hero  } from "@components/common"
import { Wallet,EthRates } from "@components/web3"
import { OrderCard } from "@components/order"
import { CourseList } from "@components/course"
import { BaseLayout } from "@components/layout"


//layout component which basically would be a wrapper for specific pages
//for example have navbar and footer on every page


export default function Home() {
  return(
    <BaseLayout>
          {/*------ HERO STARTS ------*/}
          <Hero/>
          {/*------ BREADCRUMBS STARTS ------*/}
          <Breadcrumps/>
          {/*------ ADDRESS STARTS ------*/}
          <Wallet/>
          {/*------ CURRENCY STARTS ------*/}
          <EthRates/>
          {/*------ ORDER I NFO STARTS ------*/}
          <OrderCard/>
          {/*------ COURSE CARD STARTS ------*/}
          <CourseList/>
    </BaseLayout>
          

  )  
}
