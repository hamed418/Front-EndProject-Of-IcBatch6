import { useRef, useState } from 'react'
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const emailInputRef = useRef();
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState([]); //To catch the error if user already exist!

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/users/`, {
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify({
        username: userInputRef.current.value, email: emailInputRef.current.value,
        password: passwordInputRef.current.value
      })
    })
      .then((res) => {
        if (res.ok) {
          navigate('/login')
        } else {
          return res.json();
        }
      })
      .then(result => {
        let errorArray = [];
        for (let error in result) {
          errorArray.push(result[error]);
        }
        setError(errorArray);
      })
  }

  return (
    <>
      <Header />
      <div style={{
        margin: "10px auto", display: "flex", justifyContent: "center",
        flexDirection: "column", alignItems: "center"
      }}>
        <h2>SignUp To our Application</h2><br />
        <form onSubmit={handleSubmit} >
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' ref={emailInputRef} style={{ display: "block", width: "100%" }} />
          <br /><br />

          <label htmlFor='username'>UserName:</label>
          <input type='text' name='username' ref={userInputRef} style={{ display: "block", width: "100%" }} />
          <br /><br />

          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' ref={passwordInputRef} style={{ display: "block", width: "100%" }} />
          <br /><br />
          <input type='submit' value="Sign up" />
        </form>
      </div>
      {error.length !== 0 ? (
        <>
          {error.map((err) => (
            <>
              <p style={{ marginTop: "20px", textAlign: "center", color: "red" }}>{err}</p>
            </>
          ))}
        </>
      ) : null}
    </>
  )
}

export default Signup