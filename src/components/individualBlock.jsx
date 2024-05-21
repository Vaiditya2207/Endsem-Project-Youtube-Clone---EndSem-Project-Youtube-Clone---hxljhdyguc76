import styles from '../styles/individual.module.css';
import { useNavigate } from "react-router-dom";
function IndividualBlock(props){
    const navigate = useNavigate();
    function handleClick(){
        if(props.userdata.isLoggedin) {

            navigate(`/detail/${props.data._id}`);
        }
        else {
            navigate('/signin');
        }
    }
    console.log(props.data);
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.imageContainer}>
            <img src={props.data.thumbnail} alt="display" className={styles.thumbnail}></img>
            </div>
            <p className={styles.title}>{props.data.title}</p>
            <p className={styles.genre}>{props.data.keywords.join(' & ')} &#xB7; {Math.floor(Math.random() * (66)) + 1950}</p>
            <button className={styles.buyOrRent}>Buy or Rent</button>

        </div>
    );
}

export default IndividualBlock;