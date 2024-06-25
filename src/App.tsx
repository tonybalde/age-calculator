import "./styles/App.css"
import arrow from './assets/images/icon-arrow.svg';

function App() {
  

  return (
    <>
      <div className="main-container">
        <div className="numbers-container">
          <div className="day-container">
            <h1 className="title-input">D A Y</h1>
            <input className="day-number input-field" min={1} max={31} placeholder="DD"/>
          </div>
          <div className="month-container">
            <h1 className="title-input">M O N T H</h1>
            <input className="month-number input-field" min={1} max={12} placeholder="MM"/>
          </div>
          <div className="year-container">
            <h1 className="title-input">Y E A R</h1>
            <input className="year-number input-field" min={1} max={2024} placeholder="YYYY"/>
          </div>
        </div>
        <div className="arrow-container">
          <img src={arrow} className="arrow"/>
        </div>
        <div className="calculations-container">
          <h1 className="calculations-text"><span className="dashes">--</span> Years</h1>
          <h1 className="calculations-text"><span className="dashes">--</span> Months</h1>
          <h1 className="calculations-text"><span className="dashes">--</span> Days</h1>
        </div>
      </div>
    </>
  )
}

export default App
