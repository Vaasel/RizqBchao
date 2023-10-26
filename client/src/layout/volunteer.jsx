import './volunteer.css';
import Button from '../components/button';


const Volunteer = ()=>{
    return(
        <div className='back'>
            <div className='vol'>
                <div className='vol-1'>
                    <h1><b>
                        Helping Hands Non-Profit
                    </b></h1>
                    <h3 className='vol-h'><b>
                        Connecting Communities through Food
                    </b></h3>
                    <p className='vol-p'>
                        We believe that everyone deserves access to fresh, healthy food. That's why we've created a platform that connects individuals and businesses with excess food to those who need it most. Our mission is to reduce food waste while addressing food insecurity in our communities.
                    </p>
                    <Button text={["Join as Volunteer"]}   />
                </div>
            </div>
        </div>
    )
}

export default Volunteer;