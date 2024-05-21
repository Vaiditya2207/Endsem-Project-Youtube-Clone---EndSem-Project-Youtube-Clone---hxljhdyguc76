import { useNavigate } from 'react-router-dom/dist';
import youTubeLogo from '../assets/youtubeLogo.png';
import styles from '../styles/navigation.module.css';
function NavigationBar(props) {
  const navigate = useNavigate();
  function handleSignInOut(){
    if (props.userdata.isLoggedin){
      props.setUserdata.setIsLoggedin(false);
      props.setUserdata.setUsername('');
      props.setUserdata.setToken('');
      props.setUserdata.setEmail('');
      navigate('/home');
    }else{
      navigate('/signin');
    }
  }
  return (
    <div className = {styles.navigationBar}>
      <img src = {youTubeLogo} alt="logo" className = {styles.logo}></img>
      <button className = {styles.signIn} onClick={handleSignInOut}>{props.userdata.isLoggedin ? "Sign Out" : "Sign In"}</button>
    </div>
  )
}

export default NavigationBar;