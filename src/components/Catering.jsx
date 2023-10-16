import style from "../css/Menu.css"
import style2 from "../css/Catering.css"

export default function Catering() {
    return (
        <section className="container column-layout two-equal">
            <section className="column-left">
                <div className="catering1 catering">
                    <h1>$19/person</h1>
                    <h3>
                        2 Meats, 4oz each. 2 Sides. 4oz each.<br />
                        Garlic Bread & Corn
                    </h3>
                    <h3>
                        Trip-Tip(slice or shredded), Pulled Pork,<br />
                        Chicken(shredded or 1/2 LQ ea.), Brisket.
                    </h3>
                    <h3>
                        Trip-Tip Chili, Mac N Cheese, Coleslaw, Salad,<br />
                        Potato(mashed or baked)
                    </h3>
                    <h3>
                        No extra charge for butter, sour cream,<br />
                        sauces, plasticware, paper plates or<br />
                        serving utensilis
                    </h3>
                </div>
                <div className="catering2 catering">
                    <h1>$50 PARTY PACKS</h1>
                    <h3>
                        3lbs meat(no ribs) Feeds up to 8 people
                    </h3>
                    <h3>
                        Tray of 30 wings. Choice of sauces(s) on<br />
                        wings or on side.
                    </h3>
                </div>
                <div className="catering3 catering">
                    <h1>$45 PARTY PACKS</h1>
                    <h3>
                        Tray of Coleslaw, Mac N Cheese, or<br />
                        Trip-Top Chili. 12 - 4oz serving
                    </h3>
                    <h3>
                        Tray of Cremini Chicken Fettuccini,<br />
                        6 - 8oz serving
                    </h3>
                </div>
                <div className="catering6 catering">
                    <h1>$30 PARTY PACK</h1>
                    <h3>
                        Feeds 12 people 4oz each
                    </h3>
                    <h3>
                        Refried Beans w/cheese or Black Beans
                    </h3>
                    <h3>
                        Mexican Rice
                    </h3>
                </div>
            </section>
            <section className="column-rigth">
                <div className="catering5 catering">
                    <h1>Taco Bar</h1>
                    <h3>
                        <u>$10/person</u>
                    </h3>
                    <h3>
                        2 Meats, 2oz each. Rice & Beans, 4oz each.<br />
                        Chips w.Salsa(mild) & salsa verde
                    </h3>
                    <h3>
                        Al Pastor w/onion, cilantro, pineapple
                    </h3>
                    <h3>
                        Carnitas or Pollo x/pico de gallo
                    </h3>
                    <h3>
                        Asada w/onion, cilantro
                    </h3>
                    <h3>
                        Shrimp(add $3/person)
                    </h3>
                </div>
                <div className="catering7 catering">
                    <h1>$32 TACO PACK</h1>
                    <h3>
                        <u>12 Tacos</u>
                    </h3>
                    <h3>
                        Al Pastor, Carnitas, Pollo, Asada or <br />
                        Chile Verde
                    </h3>
                    <h3>
                        Fish or Shrimp(add $3)
                    </h3>
                </div>
                <div className="catering6 catering">
                    <h1>$30 BREAKFAST TACO PACKS</h1>
                    <h3>
                        <u>$1.99 each</u>
                    </h3>
                    <h3>
                        Bacon, Sausage, Ham, Trip-Tip, Chicken or<br />
                        Chrotizo 2oz/taco
                    </h3>
                    <h3>
                        Topped with eggs(1/taco), jack cheese, &<br />
                        hot salsa or salsa verde
                    </h3>
                </div>
            </section>
        </section>
    )
}