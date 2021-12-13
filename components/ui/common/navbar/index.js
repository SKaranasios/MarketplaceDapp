import { useWeb3 , } from "@components/providers"
import Link from "next/link"
import {Button} from "@components/ui/common";
import router, { useRouter } from "next/router";
useRouter


export default function Navbar(){
  //checking if isLOading and web3 are initialized so it knows metamask is installed
  const {_web3Api:{connect,isLoading,isWeb3Loaded}} =useWeb3()
  const router = useRouter()



    return(
        <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home</a>
                </Link>
                
                <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Features</a>
                <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
              </div>
              <div>
                
                <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Company
                </a>
                {isLoading ?
                    <Button
                    disabled={true}
                    onclick={connect}>
                      Loading...
                    </Button>: isWeb3Loaded ?
                      <Button
                          onclick={connect}>
                        Connect Wallet
                      </Button>:
                        <Button
                            onclick={() => router.push("https://metamask.io/")}>
                              
                          Install Metamask
                        </Button>

                }

              </div>
            </div>
          </nav>
        </div>
      </section> 
    )
}