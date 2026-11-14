import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero14 from "../Sections/Hero14"
import Hero7 from "../Sections/Hero7"
import { useEffect } from "react"




function About() {


useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero14 />
    <div className="ab7">
    <Hero7 />
    </div>

    <div className="abft">
    <Footer />

    </div>


      
    </div>
  )
}

export default About
