import { NavLink } from "react-router-dom"


export const Navigation = () => {
    return (
        < >
        <div className="navbar">
        <div className="logo"><h1>CANDY SHOP</h1></div>
        <div className="info-nav">
            <NavLink className={"home"} to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>Candy</NavLink>
            <NavLink to={"/drink"}>Drink</NavLink>
            <NavLink to={"/chocolat"}>Chocolat</NavLink></div>
            <div className="connexion"><NavLink className="cnx">connexion</NavLink></div>
            </div>
        </>
    )
}
