function App() {
    return (
<div className="containera">
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
  );
}
export default App;
