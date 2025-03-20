const CardStyle = (props) => {
    return (
      <div class="card-body">
      <img src={props.src} alt="pictier" width="300 px"/>

         <p class="card-para">{props.para}</p>
      <h5 class="card-title"><b>{props.title}</b></h5>
      <p class="card-cost">{props.cost}</p>
      <p class="card-star">{props.star}</p>
      <a href="#" class="btn-btn-primary">MORE DETAILS</a>
      </div>
     
    );
  };
  
  export default CardStyle;