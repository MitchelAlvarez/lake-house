
import style from "../css/Menu.css"
import { GoTop } from "./menuComponents/GoTop";
import { Meals } from "./menuComponents/Meals";
import { Breakfast } from "./menuComponents/BreakFast";
import { useState } from "react";
import { Drinks } from "./menuComponents/Drinks";
import { Phone } from "./menuComponents/Phone";



export default function Menu() {
    const [subMenu, setSubMenu] = useState('Meals')
    return (
        <>
            <section className="sub-menu">
                <div><button onClick={() => setSubMenu("Break Fast")}>Break Fast</button></div>
                <div><button onClick={() => setSubMenu("Meals")}>Meals & Dinners</button></div>
                <div><button onClick={() => setSubMenu("Drinks")}>Drinks</button></div>
            </section>
            <section className="container column-layout two-equal">
                {subMenu === 'Meals' &&
                    <Meals />
                }
                {
                    subMenu === 'Break Fast' &&
                    <Breakfast />
                }
                {
                    subMenu === 'Drinks' &&
                    <Drinks />
                }


            </section>
            <GoTop />
            <Phone />

            <aside>
                <p>
                    All specialty Sandiwches, burgers, baskets and wraps are served with one side:
                    hand-cut fries, cup of tri-tip chili, soup, mac & cheese, or homemade coleslaw.
                </p>
                <p>
                    Sub onion strings, chili fires, garlic fries and small salad bar $2.00
                </p>
            </aside>
            <footer>

            </footer>



        </>
    )
}