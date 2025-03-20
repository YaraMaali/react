
const Nav=()=>{
    return(
<ul className="nav">
  <li className="nav-iteme">
    <a className="nav-link active" aria-current="page" href="#">Explore</a>
  </li>
  <li className="nav-iteme">
    <a className="nav-link" href="#">Search</a>
  </li>
  <li className="nav-iteme">
    <a className="nav-link" href="#">Hotels</a>
  </li>
  <li className="nav-iteme">
    <a className="nav-link disabled" aria-disabled="true">Offers</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true"><img src="../src/assets/g.gif"></img></a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true"><img src="../src/assets/x.png"></img></a>
  </li>
</ul>
)
}
export default Nav ;
