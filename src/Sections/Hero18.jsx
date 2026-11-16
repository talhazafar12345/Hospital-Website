



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



    <div className="hero18-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1794809552056!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>











      
    </div>
  )
}

export default Hero18
