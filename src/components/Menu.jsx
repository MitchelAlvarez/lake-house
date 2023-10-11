import { Mexican } from "./menuMeals/Mexican";
import { Nachos } from "./menuMeals/Nachos";
import { Salads } from "./menuMeals/Salads";
import { Starters } from "./menuMeals/Starters";
import { Tacos } from "./menuMeals/Tacos";
import style from "../css/Menu.css"
import { GoTop } from "./menuMeals/GoTop";



export default function Menu() {
    return (
        <>
            <section className="container column-layout two-equal">
                <section className="column-left">
                    <Starters />
                    <Nachos />
                    <Salads />
                </section>
                <section className="column-rigth">
                    <Tacos />
                    <Mexican />
                </section>
            </section>
            <GoTop />


        </>
    )
}