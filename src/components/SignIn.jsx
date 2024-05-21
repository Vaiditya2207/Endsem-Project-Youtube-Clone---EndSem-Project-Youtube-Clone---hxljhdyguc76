import styles from '../styles/authorization.module.css';
import { useNavigate, Link } from 'react-router-dom';
function SignIn(props) {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: "POST", 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'projectID': 'zlrqgz1t74xe'
      },
      body: JSON.stringify({
        email: event.target[0].value,
        password: event.target[1].value,
        "appType": "ott"
      })
    });

    const data = await response.json();
    if(data.status === "fail") {
      alert(data.message);
    }
    else
    {
      props.setUserdata.setIsLoggedin(true);
      props.setUserdata.setUsername(data.data.user.name);
      props.setUserdata.setToken(data.token);
      props.setUserdata.setEmail(data.data.user.email);
      alert(`Welcome to YouTube ${data.data.user.name}`)
      navigate('/home');
    }

  }

  return (
      <div className={styles.container}>
      <form className={styles.SignUpform} onSubmit={handleSubmit}>
        <h1 className={styles.headingSignUp}>Sign In</h1>
        <input type="email" placeholder="Email" className={styles.inputSignUp} required></input>
        <br></br>
        <input type="password" placeholder="Password" className={styles.inputSignUp} required></input>
        <br></br>
        <button className={styles.signInButton}>Sign In</button>
        <p className={styles.alreadyAccount}>New to YouTube? <Link to = '/signup'><b style={{color: 'white'}}>Sign Up here.</b></Link></p>
      </form>
    </div>
  )
}

export default SignIn;

 