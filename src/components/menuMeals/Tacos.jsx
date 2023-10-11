import { useState, useEffect } from "react";
import { getMenuCategory } from "../../services/menuFetch";
import style from "../../css/Menu.css"

export function Tacos() {
    const [csvDataJson, setCsvDataJson] = useState([])

    useEffect(() => {
        const categoryMenu = 'Tacos'
        getMenuCategory({ categoryMenu })
            .then(response => {
                console.log(response)
                setCsvDataJson(response)
            })
    }, [])

    return (
        <div className="tacos menue-topic">
            {csvDataJson.length > 0 &&
                <ul>
                    <h1>Tacos</h1>
                    {
                        csvDataJson.map(p => {
                            return (<li key={p.producto_id}>
                                <h3 className="tcs img_normal_r img-middle_r">{`${p.nombre_producto} ${p.precio > 0 ? ' $' + p.precio : ' '}`}</h3>
                                <p>{p.descripcion.replaceAll(';', ',')}</p>
                                <h4>{p.costo_extra}</h4>
                            </li>)
                        })
                    }
                </ul>
            }
        </div>
    )
}