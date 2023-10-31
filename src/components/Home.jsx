import "../css/Home.css"
import Carousel from "./Carousel"
import meal from "../images/meal.jpeg"

export default function Home() {
    return (
        <>
            <h1 className="home-title">Lakehouse</h1>
            <div className="container-home">
                <section className="publicity">
                    <h2>The best food at any time of the day</h2>
                    <Carousel />

                </section>
                <section className="dish_day">
                    <img className="meal" src={meal} alt="meal t-bone" />
                    <div className="dish_text">
                        <h3>Every day a special dish</h3>
                        <h3>Ask for it!</h3>
                    </div>
                </section>
            </div>

        </>
    )
}