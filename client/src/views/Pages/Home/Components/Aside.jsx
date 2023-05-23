import Card from "./Card";

function Aside(){
    return(
        <aside className="suggestions">
            <Card className="new-tea" />
            <Card className="best-seller"/>
            <Card className="favorite"/>
        </aside>
    )
}

export default Aside;