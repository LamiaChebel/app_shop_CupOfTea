import { Link, Outlet} from "react-router-dom";
function Nav(){
    return(
        <>
        <nav className="adminNav">
            <Link to='teas'>Thés</Link>

            <Link to='categories'>Catégories</Link>

            <Link to='images'>Images</Link>

            <Link to='packagings'>Packagings</Link>

            <Link to='packsteas'>Packagings_Teas</Link>
            <Outlet/>
        </nav>

        </>
    )
}

export default Nav;