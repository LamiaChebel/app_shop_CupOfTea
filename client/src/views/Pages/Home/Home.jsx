import Wrapper1 from "./Components/Wrapper1";
import Wrapper2 from "./Components/Wrapper2";
import Aside from "./Components/Aside";

function Home() {
    return(
        <main className="home">
            <Wrapper1 />
            <Wrapper2 />
            <Aside /> 
        </main>
    )
}

export default Home;