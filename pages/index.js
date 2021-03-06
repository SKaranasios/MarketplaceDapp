import { Breadcrumps,Hero  } from "@components/ui/common"
import { Wallet,EthRates } from "@components/ui/web3"
import { OrderCard } from "@components/ui/order"
import { CourseList } from "@components//ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "content/courses/fetcher"
import { useWeb3 } from "@components/providers"


//layout component which basically would be a wrapper for specific pages
//for example have navbar and footer on every page


export default function Home({courses}) {


  //retrieve value of provider to use it 
  //data is  an object we should destructurize it 
  //const {test} = useWeb3()
  const {_web3Api:{web3,isLoading}}  = useWeb3()




  return(
    <>
    {/*if isloading=true ?(then) :(else)*/}
    {/*------isLoading?"is init":web3 ? "Web3 Ready":"Please Install Metamask" ------*/}
    
          {/*------ with <BaseLayout> it gives an error because of Web3 Provider wrapping , context of provider never applied to the page ------*/}

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
    </>

  )  
}
//wrapping whole page 
Home.Layout =  BaseLayout

export function getStaticProps(){
  //getting data pening because of youras array of object
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


