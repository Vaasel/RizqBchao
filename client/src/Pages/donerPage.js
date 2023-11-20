import './donerPage.css';
import donerStart from '../assets/doner-start.png';

import Button from '../components/button';

const DonerPage = ()=>{
    return (
      <div>
        <div className="doner-1-1">
          <img src={donerStart} alt="Doner-Background"></img>
        </div>
        <div className="doner-1-2">
          <h1>
            <b>Food Doners</b>
          </h1>
          <h4>IT'S EASY TO BE A FOOD DONOR</h4>
          <h3>
            <b>Help Feed People with Your Excess Food</b>
          </h3>
          <p>
            Are you a restaurant, grocery store, farm, cafeteria, or caterer
            with excess food that can be donated to those in need? By signing up
            for Rizq Bachao's food donation program, you can make a significant
            impact on your community, while also reducing food waste and
            receiving tax deductions.
          </p>
        </div>
        <div className="doner-1-3">
          <Button text={["Donate Now"]} />
        </div>
        <div>
            
        </div>
        <div>Idiot</div>
      </div>
    );
}

export default DonerPage;