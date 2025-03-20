import { useState } from 'react'
import './App.css'
import Nav from './components/nav';
import Logo from './components/Logo';
import TravelCard from './components/TravelCard';
import Card from './components/CardLevalTwo';
import CardStyle from './components/CardStyle';
import Bloback from './components/BloBack';

import baliImage from "../src/assets/image.png";
import swissImage from "../src/assets/Swiss.png";
import boracayImage from "../src/assets/Bor.png";
import palawanImage from "../src/assets/Pala.png";



import Ma from "../src/assets/Ma.png";
import D from "../src/assets/D.png";
import ko from "../src/assets/A.png";
import L from "../src/assets/L.png";

function App() {
  const [count, setCount] = useState(0)
  return (
<div>

<Nav/>
<Logo/>
<Bloback/>

<div className="container">
      {/* Recent Searches */}
      <h2 className="section-title">RECENT SEARCHES</h2>
      <div className="recent-searches">
        <div className="card">
          <div className="airport-codes">
            <span className="code">SIN</span>
            <span className="plane">✈️</span>
            <span className="code">LAX</span>
          </div>
          <div className="depart">
            <strong>Depart On:</strong> 7 Sep 2021
          </div>
        </div>

        <div className="card">
          <div className="airport-codes">
            <span className="code">MY</span>
            <span className="plane">✈️</span>
            <span className="code">DUB</span>
          </div>
          <div className="depart">
            <strong>Depart On:</strong> 9 Sep 2021
          </div>
        </div>
      </div>

      {/* Prepare for Your Trip */}
      <h3 className="prepare-title">PREPARE FOR YOUR TRIP</h3>
      <div className="trip-icons">
        <div className="icon-box pink">
          🏨
          <p>Hotel</p>
        </div>
        <div className="icon-box orange">
          🛕
          <p>Attractions</p>
        </div>
        <div className="icon-box green">
          🍴
          <p>Eats</p>
        </div>
        <div className="icon-box yellow">
          🚌
          <p>Commute</p>
        </div>
        <div className="icon-box blue">
          🚖
          <p>Taxi</p>
        </div>
        <div className="icon-box lime">
          🎬
          <p>Movies</p>
        </div>
      </div>
    </div>
<h6>PLAN YOUR NEXT TRIP</h6>
<h4>Most Popular Destinations</h4>
<div class="card_div">
<div class="card_1">
< TravelCard 
titel="paris" 
cost="$699"
/>
</div>
<div class="card_2">
<TravelCard 
titel="Greece" 
cost="$1079"
/>
</div>
<div class="card_3">
<TravelCard
titel="Norway" 
cost="$895"
/>
</div>
<div class="card_4">
<TravelCard
titel="Tuscany" 
cost="$1245"
/>
</div>
<h4>Most Popular Destinations</h4>
<div class="cardsss">
<div class="c_1">
<Card
 src={baliImage}
titel="Bali"
N="4D3N"
cost="$899"
/></div>

<div class="c_2">
<Card
src={swissImage}
titel="Swiss"
N="6D5N"
cost="$900"
/></div>

<div class="c_3">
<Card
src={boracayImage}
titel="Boracay"
N="5D4N"
cost="$699"
/></div>

<div class="c_4">
<Card
src={palawanImage}
titel="Palawan"
N="4D3N"
cost="$789"
/></div>
</div>
</div>


<h4>Popular Stays</h4>
<div class="CS_1">
<CardStyle
src={Ma}
para="Entire bungalow"
titel="Matterhorn Suites"
cost="$575/night"
star="4.9⭐(60 reviews)"
/>
</div>
<div class="CS_2">
<CardStyle
src={D}
para="2-story beachfront suite"
titel="Discovery Shores"
cost="$360/night"
star="4.8⭐(116 reviews)"
/>
</div>
<div class="CS_3">
<CardStyle
src={ko}
para="Single deluxe hut"
titel="Arctic Hut"
cost="$420/night"
star="4.7⭐(78 reviews)"
/></div>
<div class="CS_4">
<CardStyle
src={L}
para="Deluxe King Room"
titel="Lake Louise Inn"
cost="$244/night"
star="4.6⭐(63 reviews)"
/></div>

<div className="foot">
<p>subscribe to our newsletter</p>
<h3>Get weekly updates</h3>
<div class="box">
<p>Fill in your details to join the party! </p>
<p><input placeholder='User Name'></input></p>
<p><input placeholder='Email address'></input></p>
<input class="subinp" type="SUBMIT"></input>

</div>
</div>

      <table>
    <tr>
      <th>FickleFlight</th>
      <th>Company</th>
      <th>Support</th>
      <th>More</th>
    </tr>
    <tr>
      <td class="p">Fickle Flight is your one-stop travel portal. We offer hassle free
         flight and hotel bookings. We also have all your flight needs in you online shop.</td>
         
      <td>About Us</td>
      <td>Account</td>
      <td>Covid Advisory</td>
    </tr>
    <tr>
      <td></td>
      <td>News</td>
      <td>Support Center</td>
      <td>Airline Fees</td>
    </tr>
    <tr>
    <td></td>
   
      <td>Careers</td>
      <td>FAQ</td>
      <td>Tips</td>
    </tr>
    <tr>
    <td></td>
     
      <td>How we work</td>
      <td>Accessibility</td>
      <td>Quarantine Rules</td>
    </tr>
  </table>
</div>
  )
}

export default App
