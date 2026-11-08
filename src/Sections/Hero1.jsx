




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Hero1() {








    const [open, setOpen] = useState(false)
    useEffect(() => {
        return () => {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.top = "";
        };
    }, []);
    const openMenu = () => {
        const scrollY = window.scrollY
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = `-${scrollY}px`
        setOpen(true)
    }
    const closeMenu = () => {
        const scrollY = Math.abs(parseInt(document.body.style.top || 0))
        document.body.style.position = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
        setOpen(false)
    }

    return (
        <div className="hero1-container">
            <div className="navBar">
                <div className="navImage">
                    <img
                        src="https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/themes/medilink/assets/img/logo-dark.png"
                        alt="Logo"
                    />
                </div>
                <div className="navLinks">
                    <Link to={"/"} className="link">Home</Link>
                    <Link to={"/menu-page"} className="link">About</Link>
                    <Link to={"/shop-page"} className="link">Departments</Link>
                    <Link to={"/contact-page"} className="link">Contact</Link>
               
                </div>

                 <div className="navBtn">
               <button><i class="fa-regular fa-calendar"></i> Appointment</button>
                </div>
                <div onClick={openMenu} className="hamburger">
                    ☰
                </div>
            </div>
            <div className={`sidebar ${open ? "open" : ""}`}>
                <div className="navImages">
                    <img
                        src="https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/themes/medilink/assets/img/logo-dark.png"
                        alt="Logo"
                    />
                </div>
                <div onClick={closeMenu} className="close-btn">
                    ✕
                </div>
                <Link to={"/"} className="side-link">
                    Home
                </Link>
                <Link to={"/menu-page"} className="side-link">
                    About
                </Link>
                <Link to={"/shop-page"} className="side-link">
                    Departments
                </Link>
                <Link to={"/contact-page"} className="side-link">
                Contact
                </Link>

                 <div className="navBtn">
               <button><i class="fa-regular fa-calendar"></i> Appointment</button>
                </div>
            </div>
        </div>
    )
}
export default Hero1;

