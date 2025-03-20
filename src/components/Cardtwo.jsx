const Cardtwo= (props) => {
    return (
        <div class="card mb-3">
        <img src={props.image} alt="pictier" width="300 px"/>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.N}</p>
          <p class="card-text">{props.cost}</p>
        </div>
    );
  };
export default Cardtwo;