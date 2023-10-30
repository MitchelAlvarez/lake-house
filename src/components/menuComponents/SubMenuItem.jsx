import { useState, useEffect } from "react";
import { getMenuCategory } from "../../services/menuFetch";

export function SubMenuItems({ csvItem, itemTitle }) {
    const [csvDataJson, setCsvDataJson] = useState([])

    useEffect(() => {
        getMenuCategory({ csvItem })
            .then(response => {
                setCsvDataJson(response)
            })
    }, [])

    return (
        <article className="wraps menue-topic">
            {csvDataJson.length > 0 &&
                <ul>
                    <h1>{itemTitle}</h1>
                    {
                        csvDataJson.map(p => {
                            return (<li key={p.producto_id}>
                                <div className="sub-item">
                                    <h3 className="tcs img_normal_r img-middle_r">{`${p.nombre_producto} ${p.precio > 0 ? ' $' + p.precio : ' '}`}</h3>
                                    <p>{p.description !== null ? p.descripcion.replaceAll(';', ',') : p.descripcion}</p>
                                    <strong>{p.costo_extra}</strong>
                                </div>
                            </li>)
                        })

                    }
                </ul>
            }
        </article>
    )
}