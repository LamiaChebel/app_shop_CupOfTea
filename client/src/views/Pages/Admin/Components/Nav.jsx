import { Link} from "react-router-dom";
function Nav(){
    return(
        <>
        <nav className="adminNav">
            <Link to={'/teas'}></Link>
            <Link to={'/categories'}></Link>
            <Link to={'/images'}></Link>
            <Link to={'/packagings'}></Link>
            <Link to={'/packsteas'}></Link>
        </nav>
        </>
    )
}

export default Nav;