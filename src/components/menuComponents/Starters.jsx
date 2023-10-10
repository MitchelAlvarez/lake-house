import { useState, useEffect } from "react";
import { getMenuCategory } from "../../services/menuFetch";
import style from "../../css/Menu.css"

export function Startes() {
    const [csvDataJson, setCsvDataJson] = useState([])

    useEffect(() => {
        const categoryMenu = 'Starters'
        getMenuCategory({ categoryMenu })
            .then(response => {
                setCsvDataJson(response)
            })
    }, [])

    return (
        <div className="starters menue-topic">
            {csvDataJson.length > 0 &&
                <ul>
                    <h1>Starters</h1>
                    {
                        csvDataJson.map(p => {
                            return (<li key={p.producto_id}>
                                <h3 className="strt1 img_normal_l img-middle_l">{`${p.nombre_producto} ${p.precio ? ' $' : ' '} ${p.precio}`}</h3>
                                <p>{p.descripcion}</p>
                                <h4>{p.costo_extra}</h4>
                            </li>)
                        })
                    }
                </ul>
            }
        </div>
    )
}