import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero15 from "../Sections/Hero15"
import Hero16 from "../Sections/Hero16"

import { useEffect } from "react"






function Department() {

useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>

    <Hero1 />
    <Hero15 />
    <Hero16 />
    <div className="abft">
    <Footer />
    </div>
      
    </div>
  )
}

export default Department
