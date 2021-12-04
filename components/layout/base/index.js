import { Navbar } from "@components/common"
import { Footer } from "@components/common"

export default function BaseLayout({children}){
    return(
        <div>
            <div className="relative bg-white overflow-hidden">
            
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
            </div>
        </div>
    )
}