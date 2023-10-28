import './home.css';
import Intro from '../layout/intro';
import Help from '../layout/help';
import Working from '../layout/working';
import Doner from '../layout/doner';
import Rewards from '../layout/rewards';
import Testimonial from '../layout/testimonial';
import Stats from '../layout/stats';
import Volunteer from '../layout/volunteer';
import Footer from "../components/footer";


const Home = () => {
  return (
    <>
      <Intro       />
      <Doner       />
      <Help        />
      <Working     />
      <Rewards     />
      <Volunteer   />
      <Stats       />
      <Testimonial />
      <Footer      />
    </>
  );
};

export default Home;
