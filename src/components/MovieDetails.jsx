import { useNavigate, useParams } from 'react-router-dom';
import left from '../assets/left.png';
import styles from '../styles/MovieDetail.module.css';
import { useEffect, useRef, useState } from 'react';
function MovieDetail(props) {
    const params = useParams();
    const { id: selectedId} = params;
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState([]);
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const videoRef = useRef();

    useEffect(() => {
        fetch(`https://academics.newtonschool.co/api/v1/ottx/show/${selectedId}`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'projectID': 'zlrqgz1t74xe',
            'Authorization': `Bearer ${props.userdata.token}` 
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setThumbnail(data.data.thumbnail);
          setTitle(data.data.title);
          setGenre(data.data.keywords);
          setDescription(data.data.description);
          setVideoUrl(data.data.video_url);
        })
        .catch(error => console.error(error));
      }, [selectedId, props.userdata.token]);
    
      const handlePlayVideo = () => {
        videoRef.current.src = videoUrl;
        videoRef.current.style.display = 'block'; // Show the video player
        videoRef.current.play();
      };
      const handleHideVideo = () => {
        videoRef.current.style.display = 'none'; // Hide the video player
        videoRef.current.pause();
      };

    return (
        <>
        <div className={styles.con}>
            <div className={styles.display} >
                <img src={thumbnail} className={styles.back} alt = "thumbnail"></img>
                <img src = {thumbnail} className={styles.centerImage} alt = "thumbnail"></img>
                    <div className={styles.movieInfo}>
                        <p className={styles.promotion}>Watch this movie on YouTube</p>
                        <div className={styles.thumbnailFlex}>
                            <div className={styles.image}>
                                <img src={thumbnail} alt="display" style={{width: "100%", height: "100%"}}></img>
                            </div>
                            <div className={styles.dataText}>
                                <h2 className={styles.movieName}>{title}</h2>
                                <p style={{color: "#ffffff"}}>This full-length movie is available on YouTube.</p>
                                <button className={styles.watchButtn} onClick={handlePlayVideo}>Watch</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.heading}>Watch on YouTube</h1>
                <div className={styles.data}>
                    <div className={styles.image}>
                    <img src={thumbnail} alt="display" style={{width: "100%", height: "100%"}}></img>
                    </div>
                    <div className={styles.dataText}>
                        <h2 className={styles.movieName}>{title}</h2>
                        <p className={styles.movieGenre}>{genre.join(' & ')} &bull; {Math.floor(Math.random() * (3 - 1 + 1)) + 1950}</p>
                        <p style={{color: "#ffffff"}}>English and Hindi audio</p>
                        <button className={styles.buttn}>A</button>
                        <button className={styles.buttn}>CC</button>
                    </div>
                </div>
                <button className={styles.watchButton} onClick={handlePlayVideo}>Watch</button>
                <p className={styles.dis}>{description}</p>
            </div>
            <h1 className={styles.bottomName}>{title}</h1>
        </div>
        <video ref={videoRef} controls style={{ display: 'none', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000, height: '100vh' }}>
        <button onClick={handleHideVideo}>Hide</button>
        </video>
        </>
    )
}

export default MovieDetail;