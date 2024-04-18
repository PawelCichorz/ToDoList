import './register.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import {useState ,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'






function Register (props) {


const history = useNavigate()
const [email,Setemail] = useState('')
const [password,Setpass] = useState('')
const [error,Seterror] = useState('')
const [errop,Seterrop] = useState('')

// const auth =useContext(authContex)

const emailValidate = (text) =>{
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
    return re.test(text)
   
}
  

const passwordValidate = (text) =>{
const low = /[a-z]/g
const row = /[A-Z]/g
const nums = /[1-9]/g

if (low.test(text) && row.test(text) && nums.test(text)){
    return true
}else{
    return false
}
}



useEffect(() => {if
    (emailValidate(email)){
Seterror('')

}else if ((email.length > 0) && (emailValidate(email) ===false )){
    Seterror('Niepoprawny email')
}
else if(email.length == 0){
    Seterror('')
}



},[email])
useEffect(() => {if
    (passwordValidate(password)){
Seterrop('')

}else if ((password.length > 0) && (passwordValidate(password) ===false )){
    Seterrop('Za słabe hasło ,minimum 4 znaki !')
}
else if(password.length == 0){
    Seterrop('')
}



},[password])
const Setol = props.Setol

const fank = () =>{
    Setol('Zarejetrowano Poprawnie !')
    setTimeout(() => {
        Setol('')
    }, 1000);
}
async function handleSubmit  (e)  {
    ; // Zapobiegaj domyślnej akcji formularza
e.preventDefault()
    try {
      
        await axios.post('https://api.mieszkaniaskawina.net.pl/zarejestruj', {
            email: email,
            password: password
        })
        history('/logowanie');} 
                
                catch (error) {
                    console.error('Błąd podczas rejestracji:', error);
                    // Tutaj możesz obsłużyć błędy rejestracji
                }
            };
    return( 
        
   <form className='form' method='POST' 
   onSubmit={handleSubmit}
   >
   
<div className='email' >
    <label> Email:</label><input type="email" name='email' value={email} onChange={e => Setemail(e.target.value)}></input>
   <p>{error}</p>
</div>

<div className='password' >
<label> Hasło:</label><input type="Password" name='password' value={password} onChange={e => Setpass(e.target.value)} ></input>
<p>{errop}</p>
</div>

<button  >ZAREJESTRUJ</button>




   </form>
  
        
        )
}

export default Register