import { Breadcrumps,Hero  } from "@components/ui/common"
import { Wallet,EthRates } from "@components/ui/web3"
import { OrderCard } from "@components/ui/order"
import { CourseList } from "@components//ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "content/courses/fetcher"


//layout component which basically would be a wrapper for specific pages
//for example have navbar and footer on every page


export default function Home({courses}) {
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
          {/*------ going to components to pass courses as an argument ------*/}
          <CourseList
          courses ={courses}>
          </CourseList>
    </BaseLayout>
          

  )  
}

export function getStaticProps(){
  //getting data as array of object
  const { data } = getAllCourses()
  //we should destructurize data in order to show up properly
  //important content in reactn 
  return{
    //this should be returned as object of props
    props : {
      courses:data 
    }
  }
}


