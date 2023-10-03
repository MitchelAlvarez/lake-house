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
                        <li role="menuitem" className="menu-item"><NavLink to="/"><i className="fa-solid fa-house">Home</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="#"><i className="fa-solid fa-motorcycle">Order Online</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="menue"><i className="fa-solid fa-sheet-plastic">Menue</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="contact_us"><i className="fa-solid fa-address-card">Contact Us</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="catering"><i className="fa-solid fa-fire-burner">Catering</i></NavLink></li>
                        <li>
                            <div className="social-media_collapse">
                                <ul>
                                    <li>
                                        <a href=""><img src={facebookIco} alt="fecebook-icon" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src={instagramIco} alt="fecebook-icon" /></a>
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