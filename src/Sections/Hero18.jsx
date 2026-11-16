



import { useState } from "react"


function Hero18() {


const [formData,setFormData] = useState({
name:"",
email:"",
subject:"",
message:"",
})

const [errors,setErrors] = useState({})


const getInp=(e)=>{
const {name,value} = e.target
setFormData({...formData,[name]:value})
setErrors({...errors,[name]:""})
}


const validate=()=>{
const newErrors ={}
if(!formData.name){
newErrors.name ="Please enter your name"
}
if(!formData.email){
newErrors.email ="Please enter your email"
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
newErrors.email = "Please enter valid email"
}
if(!formData.subject){
newErrors.subject = "Pease enter your subject"
}
if(!formData.message){
newErrors.message = "Please enter your subject"
}
return newErrors

}


const submit=(e)=>{
e.preventDefault()
const validation = validate()
if(Object.keys(validation).length > 0){
setErrors(validation)
return
}







}















  return (
    <div>


        <div className="hero18-all">

    



    <div className="hero18-para">
        <h1>Leave us message</h1>
    </div>



    <div className="hero18-main">
        <form onSubmit={submit} action="">


        <div className="hero18-inp">
            <input value={formData.name} onChange={getInp} placeholder="Enter your name" type="text" name="name" id="" />
            {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="hero18-inp">
            <input value={formData.email} onChange={getInp} placeholder="Enter your email" type="text" name="email" id="" />
            {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="hero18-inp">
            <input value={formData.subject} onChange={getInp} placeholder="Enter Subject" type="text" name="subject" id="" />
            {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="hero18-inp">
        <input value={formData.message} onChange={getInp} placeholder="Leave your message" type="text" name="message" id="" />
        {errors.message && <p className="error">{errors.message}</p>}
        </div>


        <div className="hero18-btn">
            <button>Send Message</button>
        </div>
        </form>
    </div>

    </div>









      
    </div>
  )
}

export default Hero18
