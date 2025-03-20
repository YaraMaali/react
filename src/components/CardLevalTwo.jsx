const Card=(props)=>{
  return(
     <div className="card" style={{width: 300}}>
      <div className="card-body">
      <img className="imgincard" src={props.src} alt="pictier" width="300 px"/>
        <h5 className="card-title">{props.titel}</h5>
        <p className="card-text">{props.N}</p>
        <p className="card-text">{props.cost}</p>
        
      </div>
      </div>
  )
}
export default Card ;
        