import { Outlet } from "react-router-dom";
import DatasList from "./Components/DatasList";
import Header from "./Components/Header";
import CrudTeas from "./Components/CRUD/CrudTeas";

function Admin() {
    return (
        <main className="admin">
            <Header />
            <DatasList />
            <CrudTeas/>
            <Outlet/>
        </main>
    )
}

export default Admin;