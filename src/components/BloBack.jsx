const Bloback=()=>{
    return(
<div className="back">
          <h1 className="back_cont">Let’s explore & travel the world</h1>
          <p className="back_cont_p">Find the best destinations and the most popular stays!</p>
    <div className="celdiv">
    <h4 className="para">Search flights</h4>
    <input className="celinder"  placeholder="Departure - Singapore (SIN)"></input>
    <input className="celinder" placeholder="Arrival - Los Angeles (LA)"></input>
    <input className="celinder" type="date" placeholder="Date" defaultValue="2022-05-01"></input>
     <a href="#" class="btn-btn-primary-Search_flights">Search flights</a> 
    </div> 

</div>
)}
export default Bloback ;