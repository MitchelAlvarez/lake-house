import "../css/Home.css"
import Carousel from "./Carousel"

export default function Home() {
    return (
        <>
            <h1>Lake House</h1>
            <div className="container-home">
                <section className="publicity">
                    <h2>The best food at any time of the day</h2>
                    <Carousel />

                </section>
                <section className="grid-item dish_day">
                    <div className="dish_text">
                        <h1>Every day a special dish</h1>
                        <h1>Ask for it!</h1>
                    </div>
                </section>
            </div>

        </>
    )
}