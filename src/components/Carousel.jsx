import "../css/Carousel.css"
import breakfast from "../images/breakfast.jpeg"
import bbq from "../images/bbq.jpeg"
import beer from "../images/beer.jpg"
export default function Carousel() {
    return (
        <>
            <div className="slider-container">

                <div className="slider">
                    <div className="slide slide1">
                        <img src={breakfast} alt="Imagen 1" />
                    </div>
                    <div className="slide slide2">
                        <img src={bbq} alt="Imagen 2" />
                    </div>
                    <div className="slide slide3">
                        <img src={beer} alt="Imagen 3" />
                    </div>
                </div>
            </div>

        </>
    )
}