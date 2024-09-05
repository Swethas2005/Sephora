import "./mainContainer.css"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import SliderOne from "../components/SliderOne"
import ChosenSlider from "../components/ChosenSlider"
import NewArrivals from "../components/NewArrivals"
import BeautyOffers from "../components/BeautyOffers"
import Brand from "../components/Brand"
import TrendingSlider from "../components/TrendingSlider"
import Insider from "../components/Insider"
import Little from "../components/Little"
import Beauty from "../components/Beauty"
import Feedback from "../components/feedback"
import Fotter from "../components/Fotter"

function MainContainer(){
    return(
        <div id="mainContainer">
        <Banner/>
        <Navbar/>
        <SliderOne/>
        <ChosenSlider/>
        <NewArrivals/>
        <BeautyOffers/>
        <Brand/>
        <TrendingSlider/>
        <Insider/>
        <Little/>
        <Beauty/>
        <Feedback/>
        <Fotter/>
        </div>
    )
}

export default MainContainer