import './home.css';
import Intro from '../layout/intro';
import Volunteer from '../layout/volunteer';
import Working from '../layout/working';
import Doner from '../layout/doner';
import Rewards from '../layout/rewards';
import Testimonial from '../layout/testimonial';

const Home = () => {
  return (
    <>
      <Intro      />
      <Doner      />
      <Volunteer  />
      <Working    />
      <Rewards    />
      <Testimonial/>
    </>
  );
};

export default Home;
