import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../images/Lakehouse_logo.png"
import facebookIco from "../images/icons/icon-facebook.ico"
import instagramIco from "../images/icons/icon-instagram.ico"
import { CollapseMenu } from "./CollapseMenu";
export default function Root() {
    return (
        <>
            <header>
                <section className="navbar_logo">
                    <Link to={`/`}>
                        <img src={logo} alt="Lake_House_Logo" />
                    </Link>
                </section>
                <nav className="bigNav">
                    <ul role="menu">
                        <li role="menuitem" className="menu-item"><NavLink to="/"><i className="fa-solid fa-house">Home</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="#"><i className="fa-solid fa-motorcycle">Order Online</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="menue"><i className="fa-solid fa-sheet-plastic">Menue</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="contact_us"><i className="fa-solid fa-address-card">Contact Us</i></NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="catering"><i className="fa-solid fa-fire-burner">Catering</i></NavLink></li>
                    </ul>
                </nav>
                <section className="social-media">
                    <ul>
                        <li>
                            <a href=""><img src={facebookIco} alt="fecebook-icon" /></a>
                        </li>
                        <li>
                            <a href=""><img src={instagramIco} alt="fecebook-icon" /></a>
                        </li>
                    </ul>
                </section>
                <CollapseMenu />
            </header>
            <main>
                <hr className="header-separator" />
                <Outlet />
            </main>
        </>
    )
}