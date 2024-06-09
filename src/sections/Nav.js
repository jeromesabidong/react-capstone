import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import OrderOnlinePage from "../pages/OrderOnlinePage";

const Nav = () => {

    const links = [
        { name: "Home", url: "/" },
        { name: "About", url: "/homepage" },
        // { name: "Menu", url: "#menu" },
        // { name: "Reservations", url: "#reservations" },
        { name: "Order Online", url: "/order-online" },
        // { name: "Login", url: "#login" },
    ]

    return <>
        <nav className='flex items-center my-3'>
            <a className="mr-10" href="#home"><img src='/logo.svg' alt="logo"></img></a>
            <div>
                <ul role="menu" className="lg:flex">
                    { links.map(( link ) => {
                        return <li key={ link.name } className="px-3 py-1 rounded hover:bg-yellow-400">
                            {/* <a className="hover:bg-primary-yellow rounded px-2 py-1" href={ link.url }>{ link.name }</a> */}
                            <Link to={ link.url } className="hover:bg-primary-yellow rounded px-2 py-1">{ link.name }</Link>
                        </li>
                    }) }
                </ul>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<></>}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/order-online" element={<OrderOnlinePage />}></Route>
        </Routes>
    </>
}

export default Nav;