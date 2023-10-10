import { Mexican } from "./menuComponents/Mexican";
import { Nachos } from "./menuComponents/Nachos";
import { Salads } from "./menuComponents/Salads";
import { Startes } from "./menuComponents/Starters";
import { Tacos } from "./menuComponents/Tacos";
import style from "../css/Menu.css"
import { GoTop } from "./menuComponents/GoTop";



export default function Menu() {
    return (
        <>
            <section className="container column-layout two-equal">
                <section className="column-left">
                    <Startes />
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