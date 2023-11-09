import {useRef} from 'react'
import Header from './../components/Header';
import classes from './Login.module.css'
function Login() {
   const userNameInputRef=useRef();
   const passwordInputRef=useRef();

  return (
    <>
      <Header/>
      <section className={classes.auth}>
        <h1>LogIn To Your Account:</h1>
        <form>
          <div className={classes.control}>
            <label htmlFor='username'>Your User Name:</label>
            <input type='text' name='username' required ref={userNameInputRef}/>
            </div>
             <div className={classes.control}>
             <label htmlFor='password'>Your Password:</label>
            <input type='password' name='password' required ref={passwordInputRef}/>
             </div>
          <div className={classes.actions}>
            <button className='btn-white'>Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login