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
                        <li role="menuitem" className="menu-item"><NavLink to="/">Home</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="https://lakehousebbq.hrpos.heartland.us/menu">Order Online</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="menu">Menu</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="contact_us">Contact Us</NavLink></li>
                        <li role="menuitem" className="menu-item"><NavLink to="catering">Catering</NavLink></li>
                    </ul>
                </nav>
                <section className="social-media">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61550230981807&mibextid=LQQJ4d"><img src={facebookIco} alt="fecebook-icon" /></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/lakehouse.brew.bbq?igshid=MzRlODBiNWFlZA=="><img src={instagramIco} alt="fecebook-icon" /></a>
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