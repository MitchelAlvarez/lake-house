import { useState, useEffect } from "react";
import { getMenuCategory } from "../../services/menuFetch";
import style from "../../css/Menu.css"

export function Nachos() {
    const [csvDataJson, setCsvDataJson] = useState([])

    useEffect(() => {
        const categoryMenu = 'Nachos'
        getMenuCategory({ categoryMenu })
            .then(response => {
                setCsvDataJson(response)
            })
    }, [])

    return (
        <div className="nachos menue-topic">
            {csvDataJson.length > 0 &&
                <ul>
                    <h1>Nachos</h1>
                    {
                        csvDataJson.map(p => {
                            return (<li key={p.producto_id}>
                                <h3 className="nach img_normal_l img-middle_l">{`${p.nombre_producto} ${p.precio > 0 ? ' $' + p.precio : ' '}`}</h3>
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