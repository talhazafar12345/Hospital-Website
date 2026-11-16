



import { useState } from "react"

function Hero20() {



const[data,setData] = useState({
name:"",
department:"",
email:"",
date:"",
doctor:"",
})

const[error,setError] = useState({})


const getInp=(e)=>{
const {name,value} = e.target
setData({...data,[name]:value})
setError({...error,[name]:""})
}


const validation=()=>{

const newErrors={}
if(!data.name){
newErrors.name ="Please enter your name"
}
if(!data.email){
newErrors.email = "Please enter your email"
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
newErrors.email = "Please enter valid email"
}
if(!data.department){
newErrors.department = "Please select your department"
}
if(!data.date){
newErrors.date = "Please enter your date"
}
if(!data.doctor){
newErrors.doctor = "Please enter your doctor name"
}
return newErrors
}

const submit=(e)=>{
const validate = validation()
e.preventDefault()
if(Object.keys(validate).length > 0){
setError(validate)
return
}
}

  return (
    <div className="hero20-all">
    <div className="hero20">
        <form onSubmit={submit}>

            <div className="hero18-appo">
                <h1>Appointment Form</h1>
            </div>
            <br /> <br />
        <div className="hero20-inp">
            <input value={data.name} onChange={getInp} placeholder="Enter your name" type="text" name="name" id="" />
            {error.name && <p className="error">{error.name}</p>}
        </div>

         <div className="hero20-inp">
            <input value={data.email} onChange={getInp} placeholder="Enter your email" type="text" name="email" id="" />
            {error.email && <p className="error">{error.email}</p>}

        </div>

        
        <div className="hero20-inp">
            <input value={data.department} onChange={getInp} placeholder="Enter department name" type="text" name="department" id="" />
            {error.department && <p className="error">{error.department}</p>}
        </div>

        <div className="hero20-inp">
            <input value={data.doctor} onChange={getInp} placeholder="Enter doctor name" type="text" name="doctor" id="" />
            {error.doctor && <p className="error">{error.doctor}</p>}

        </div>

        <div className="hero20-inp">
            <input value={data.date} onChange={getInp} type="date" name="date" id="" />
           {error.date && <p className="error">{error.date}</p>}

        </div>
        
        <div className="hero18-btn">
            <button>Book Appointment</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Hero20
