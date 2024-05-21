import styles from '../styles/authorization.module.css';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
      method: "POST", 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'projectID': 'zlrqgz1t74xe'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        "appType": "ott"
      })
    });

    const data = await response.json();
    if (data.status === "success"){
      alert("Account created successfully. Please sign in to continue.");
      navigate('/signin');
    }else{
      alert(data.message);
    }
  }

  return (
      <div className={styles.container}>
      <form className={styles.SignUpform} onSubmit={handleSubmit}>
        <h1 className={styles.headingSignUp}>Sign Up</h1>
        <input type="text" placeholder="Name" className={styles.inputSignUp} required></input>
        <br></br>
        <input type="email" placeholder="Email" className={styles.inputSignUp} required></input>
        <br></br>
        <input type="password" placeholder="Password" className={styles.inputSignUp} required></input>
        <br></br>
        <button className={styles.signInButton}>Sign In</button>
        <p className={styles.alreadyAccount}>Already have an account? <Link to = '/signin'><b style={{color: 'white'}}>Sign in here.</b></Link></p>
      </form>
    </div>
  )
}

export default SignUp;
