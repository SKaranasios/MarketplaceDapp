import { Web3Provider } from "@components/providers"
import { Navbar } from "@components/ui/common"
import { Footer } from "@components/ui/common"

export default function BaseLayout({children}){
    return(
        
            
            <Web3Provider>
                {/*------ useWeb3 will be used in components as a children not in here ------*/}
                <div className="relative max-w-7xl mx-auto px-4">
                    {/*------ NAVBAR STARTS ------*/}
                    <Navbar />
                    <div className="fit">
                    {children}
                    </div>
                </div>
                {/*------ FOOTER STARTS ------*/}
                <>
                <Footer/>
                </>
            </Web3Provider>
        
    )
}