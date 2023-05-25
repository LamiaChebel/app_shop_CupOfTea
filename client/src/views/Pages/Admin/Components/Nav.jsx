import { Link, Outlet} from "react-router-dom";
function Nav(){
    return(
        <>
        <nav className="adminNav">
            <Link to={'/admin/teas'}>Thés</Link>
            <Link to={'/admin/categories'}>Catégories</Link>
            <Link to={'/admin/images'}>Images</Link>
            <Link to={'/admin/packagings'}>Packagings</Link>
            <Link to={'/admin/packsteas'}>Packagings_Teas</Link>
        </nav>

        </>
    )
}

export default Nav;