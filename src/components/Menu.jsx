import { Mexican } from "./menuComponents/Mexican";
import { Nachos } from "./menuComponents/Nachos";
import { Salads } from "./menuComponents/Salads";
import { Starters } from "./menuComponents/Starters";
import { Tacos } from "./menuComponents/Tacos";
import style from "../css/Menu.css"
import { GoTop } from "./menuComponents/GoTop";
import { Wrap } from "./menuComponents/Wraps";
import menuMealsJson from "../services/menuMeals.json"
import { Meals } from "./menuComponents/Meals";
import { useState } from "react";



export default function Menu() {
    const [subMenu, setSubMenu] = useState('Meals')
    const menuMealArray = Object.keys(menuMealsJson)


    console.log(subMenu)
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
                    <h1>BREAK FAST</h1>
                }


            </section>
            <GoTop />


        </>
    )
}