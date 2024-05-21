import rightButton from '../assets/right.png';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", color: "red" , width: "50px", height: "40px", marginRight: "0px"}}
      onClick={onClick}
    >
      <img src = {rightButton} />
    </div>
  );
}

export default NextArrow;