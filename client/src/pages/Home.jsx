import Banner from "../components/Banner";
import Contact from "../components/Contact";
import RecentQueries from "../components/RecentQueries";
import Testimonial from "../components/Testimonial";
import TinyBanner from "../components/TinyBanner";


const Home = () => {
    return (
        <div className=" ">
            <Banner />
            <TinyBanner />
            <RecentQueries />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;