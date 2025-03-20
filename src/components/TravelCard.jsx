const TravelCard = (props) => {
  return (
    <div className="cardtext-bg-dark" >
    <div className="card-img-overlay">
      <h5 className="card-title">{props.titel}</h5>
      <h6 className="card-text">FROM</h6>
      <p className="card-text">{props.cost}</p>
    </div>
  </div>
  );
};

export default TravelCard;