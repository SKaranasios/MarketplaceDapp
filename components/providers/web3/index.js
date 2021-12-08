const { createContext, useContext} = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import { info } from "autoprefixer";
import Web3 from "web3";
import { useState ,useEffect } from "react";


const Web3context  = createContext(null)


//react context api:context provides a way to pass data through component tree wihtout doing it manually
//declare data , any component in the tree subsribe to it
//.provider , .consumer  
//we gonna pass it to base layout to render  






export default function Web3Provider({children}){


    //use this state to display information inside render function
    //and manipulate state with certain functions
    //   [variable , function]

    const [web3Api, setWeb3Api] = useState({
        provider : null,
        web3:null,
        //reference of contract
        contract:null,
        isInitialized:false
    })

    useEffect(() => {
        const loadProvider =async  () =>{

            const provider = await detectEthereumProvider()
            //getting instance of deployed cotnract
            if(provider){
               const web3= new Web3(provider)
               setWeb3Api({
                   provider,
                   web3,
                   contract:null,
                   isInitialized:true
               })


            }else {
                setWeb3Api(api => ({...api,isInitialized:true}) )
                console.error("Install Metamask")
            }


        }

        loadProvider()
    }, [])

    return (
        //web3 provider in base layout ,all in between are considered children
        //therefore passing value to all of the childrens

        //value is an object  in test property  with hello value

        //here we will pass metamask integraition so all children can access wallet
        <Web3context.Provider value={{web3Api}}>

            {children}

        </Web3context.Provider>
    )
}

//use this function  to retrieve value
export function useWeb3(){
    return useContext(Web3context)

}