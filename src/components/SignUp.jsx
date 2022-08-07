import React, { useState } from 'react'
import '../components/SignUp.css'

const logo = 'https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg'

const SignUp = () => {

 const [userRegisteration, setUserRegistration] = useState({
    username: "",
    email: "",
    password:""
 })

 const [records, setRecords] = useState([])

 const handleInput =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setUserRegistration({...userRegisteration,[name]: value})
 }

const handleSubmit = (e)=>{
e.preventDefault();
const newRecord = {...userRegisteration,id:new Date().getTime().toString()}
console.log(records);
setRecords([...records, newRecord])
console.log(records);

setUserRegistration({ username: "", email: "", password:""})
 }

  return (<>

    <div className='container'>
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit}>
      <img className="mb-4" src={logo} alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Register Here</h1>
  
      <div className="form-floating mb-1">
        <input type="text" className="form-control" name='username' onChange={handleInput} value={userRegisteration.username}  placeholder="username"/>
        <label for="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-1">
        <input type="email" className="form-control" name='email' onChange={handleInput} value={userRegisteration.email}  placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-1">
        <input type="password" className="form-control" name='password' onChange={handleInput} value={userRegisteration.password}  placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      
  
      <button className="w-100 btn btn-lg btn-primary">Signup</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  </main>
  </div>

  {/* IF you want to display all the details just uncomment this lines it will show all the details */}
  {/* <div>
  {
  records.map(curElem=>{
   return <div key={curElem.id} className='container text-center p-3 mb-2 bg-dark text-white'>
   <div class="row">
   <div class="col">
  {curElem.username}
    </div>
    <div class="col">
   {curElem.email}
    </div>
    <div class="col">
  {curElem.password}
    </div>
   </div>
    </div>
  })
}
  </div> */}
  </>

  )
}

export default SignUp