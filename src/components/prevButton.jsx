import leftButton from '../assets/left.png';

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", color: "green",  width: "50px", height: "40px", marginLeft: "10px", zIndex: "1"}}
      onClick={onClick}
    >
      <img src = {leftButton} />
    </div>
  );
}
export default PrevArrow;