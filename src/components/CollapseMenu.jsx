import { useState, useEffect } from "react"
import { MenuIcon, CloseIcon } from "./Icons"
import { Link, NavLink } from "react-router-dom"
import facebookIco from "../images/icons/icon-facebook.ico"
import instagramIco from "../images/icons/icon-instagram.ico"

export function useCollapse() {
    const [visible, setVisible] = useState(false)

    return { visible, setVisible }
}


export function CollapseMenu() {
    const { visible, setVisible } = useCollapse()

    useEffect(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            if (visible) {
                mainElement.classList.add('menu-open');
            } else {
                mainElement.classList.remove('menu-open');
            }
        }
    }, [visible])

    return (
        <>
            <button className="collapseMenu" onClick={() => setVisible(!visible)}>
                {
                    visible
                        ? <CloseIcon />
                        : <MenuIcon />
                }

            </button>
            {
                visible &&
                <nav className="nav-collapse">
                    <ul role="menu">
                        <li role="menuitem" className="menu-item"><NavLink to="/" onClick={() => setVisible(!visible)}>Home</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="https://lakehousebbq.hrpos.heartland.us/menu" target="_blank" rel="nonreferrer" onClick={() => setVisible(!visible)}>Order Online</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="menu" onClick={() => setVisible(!visible)}>Menu</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="contact_us" onClick={() => setVisible(!visible)}>Contact Us</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="catering" onClick={() => setVisible(!visible)}>Catering</NavLink></li>
                        <li>
                            <div className="social-media_collapse">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=61550230981807&mibextid=LQQJ4d"><img src={facebookIco} alt="fecebook-icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/lakehouse.brew.bbq?igshid=MzRlODBiNWFlZA=="><img src={instagramIco} alt="fecebook-icon" /></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            }

        </>
    )
}