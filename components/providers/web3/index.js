const { createContext, useContext} = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import { info } from "autoprefixer";
import Web3 from "web3";
import { useState ,useEffect,useMemo } from "react";


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
        provider: null,
        web3: null,
        contract: null,
        isLoading: true
      })
    
      useEffect(() => {
        const loadProvider = async () => {
    
          const provider = await detectEthereumProvider()
          if (provider) {
            const web3 = new Web3(provider)
            setWeb3Api({
              provider,
              web3,
              contract: null,
              //changed to isLoading instead of isInitialized
              //isInitialized:false
              isLoading: false
            })
          } else {
            setWeb3Api(api => ({...api, isLoading: false}))
            console.error("Please, install Metamask.")
          }
        }
    
        loadProvider()

        //dependencies array 
      }, [])


      //useMemo is a callback function
      //return object only when dependancies of object are changed

      //merging together web3Api and connect
      const _web3Api =useMemo(()=>{
        return{
          //destructurizing web3Api
          ...web3Api,
            //check for navbar to change between connect/install metamask
          isWeb3Loaded:web3Api.web3 != null,
              //!web3Api.isLoading && web3Api.web3,
          //connect function
          //check if i already have loaded a provider
          connect : web3Api.provider?
            async () => {
                try {
                    await web3Api.provider.request({method: "eth_requestAccounts"})

                } catch {
                    console.error("Cannot retrieve account!!")
                    window.location.reload()

                }
            }:
            () => console.error("Cannot connect to metamask,try reloading"),

        }
 
      }, [web3Api])
    

    return (
        //web3 provider in base layout ,all in between are considered children
        //therefore passing value to all of the childrens

        //value is an object  in test property  with hello value

        //here we will pass metamask integraition so all children can access wallet
        <Web3context.Provider value={{_web3Api}}>

            {children}

        </Web3context.Provider>
    )
}

//use this function  to retrieve value
export function useWeb3(){
    return useContext(Web3context)

}