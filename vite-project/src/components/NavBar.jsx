import React, {useState} from "react";
import './NavBar.css'

const NavBar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '20vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    
                </div>

              
            </nav>

            <div className={menu_class}>
                {/* Conditionally render the h2 elements when menu is active */}
                {isMenuClicked && (
                    <>
                        <h2>Menu Item 1</h2>
                        <h2>Menu Item 2</h2>
                    </>
                )}
            </div>
        </div>
    )
}

export default NavBar;