import './signin.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

/* there are some console errors about useNavigate, but it's bc we don't have a router yet*/

// component for signing up as a volunteer
export default function SignUp(props){
    
    // useNavigate to navigate after successful sign up
    //const navigate = useNavigate()
  
    // state that stores values in inputs
    const [reginputValue, regsetInputValue] = useState({name: "", email:"", password: ""})
    const [signinputValue, signsetInputValue] = useState({email:"", password: ""})
  
    // regex test to see if email is valid
    const regvalidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(reginputValue.email) || reginputValue.email==""
    const signvalidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(signinputValue.email) || signinputValue.email==""
  
    // returns an error if validEmail is false
    const regvalidEmailMessage = regvalidEmail ? "": <div style={{textAlign:"left", padding: "0", color: "red", fontSize:".8rem"}}>*Please enter a valid email</div>
    const signvalidEmailMessage = signvalidEmail ? "": <div style={{textAlign:"left", padding: "0", color: "red", fontSize:".8rem"}}>*Please enter a valid email</div>
  
    // regex test to see if name is valid
    const regvalidName = /[^\d\s]/.test(reginputValue.name) || reginputValue.name==""
    const signvalidName = /[^\d\s]/.test(signinputValue.name) || signinputValue.name==""
  
    // on submission, the function sends post request to backend, and navigates away if successful
    //will need to have two copies of this function for register form and sign in form
    function handleSubmit(event){
      event.preventDefault();
      //will uncomment once we know where to post, missing the post url and success url 
      /* axios.post("", inputValue)
        .then(response => {
          navigate("/")
          console.log(response.data)
        })
        .catch(error => console.log(error)) */
    }

    useEffect(() => {
        // makes the signin div disappear
        var signin = document.getElementById('signin')
        var register = document.getElementById('register')
        var backbutton = document.getElementById('backbutton')
        backbutton.onclick = function(){
            console.log("back clicked")
            register.style.display = 'none';
            signin.style.display = 'block';
        }
        document.getElementById('registerbutton').onclick = function() {
            console.log("register clicked")
            signin.style.display = 'none';
            register.style.display = 'block';
        }
        
      })

    //onclick register pulls up register div and disappears sign up div
    //function to appear register div, function to disappear sign up div
    
    return(
      <div id="container">
        <div id="signin">
            <div id="toprow" className="">
                <h1 id="" className="half-width">
                    Sign in
                </h1>
                <button id="registerbutton" className="half-width" type="button">
                    Register
                </button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="inputs">
                        <strong>Email</strong>
                        <input type="text" value={signinputValue.email} onChange={(e) => signsetInputValue({...signinputValue, email: e.target.value})}/>
                        {signvalidEmailMessage}
                    </div>

                    {/* password */}
                    <div className="inputs">
                        <strong>Password</strong>
                        <input type="text" value={signinputValue.password} onChange={(e) => signsetInputValue({...signinputValue, password: e.target.value})}/>
                    </div>

                    <input className="greenbutton" type="submit"></input>
                </form>
            </div>
        </div>

        <div id="register">
            <div>
                <h2> Create your account </h2>
                <p> Registration is easy. </p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="inputs">
                        <strong>Name</strong>
                        <input type="text" value={reginputValue.name} onChange={(e) => regsetInputValue({...reginputValue, name: e.target.value})}/>
                    </div>
                    
                    {/* email */}
                    <div className="inputs">
                        <strong>Email</strong>
                        <input type="text" value={reginputValue.email} onChange={(e) => regsetInputValue({...reginputValue, email: e.target.value})}/>
                        {regvalidEmailMessage}
                    </div>

                    {/* password */}
                    <div className="inputs">
                        <strong>Password</strong>
                        <input type="text" value={reginputValue.password} onChange={(e) => regsetInputValue({...reginputValue, password: e.target.value})}/>
                    </div>
                    <div id="toprow">
                        <button id="backbutton" className="greenbutton half-width halfbuttons">Back</button>
                        <input className="greenbutton half-width halfbuttons" type="submit" value="Register"></input>
                    </div>
                    
                </form>
            </div>
        </div>
      </div>
    )
}