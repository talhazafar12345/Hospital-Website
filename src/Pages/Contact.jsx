import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero17 from "../Sections/Hero17"
import Hero18 from "../Sections/Hero18"
import { useEffect } from "react"





function Contact() {

useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>

    
    <Hero1 />
    <Hero17 />
    <Hero18 />
     <div className="abft">
    <Footer />
    </div>



      
    </div>
  )
}

export default Contact
