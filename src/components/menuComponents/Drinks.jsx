import menuItems from "../../services/MenuDrinks.json"
import { SubMenuItems } from "./SubMenuItem";
import style from "../../css/Menu.css"


export function Drinks() {
    return (
        <>
            <section className="column-left">
                <ul>
                    {
                        menuItems.map(item => {
                            if (item.menuSide === "column-left") {
                                return (
                                    <li key={item.id}>
                                        <SubMenuItems csvItem={item.csvId} itemTitle={item.nombre} />

                                    </li>
                                )
                            }

                        })
                    }

                </ul>
            </section>
            <section className="column-rigth">
                <ul>
                    {
                        menuItems.map(item => {
                            if (item.menuSide === "column-rigth") {
                                return (
                                    <li key={item.id}>
                                        <SubMenuItems csvItem={item.csvId} itemTitle={item.nombre} />
                                    </li>
                                )
                            }

                        })
                    }

                </ul>
            </section>

        </>

    )
}