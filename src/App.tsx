
import Main from "./layout/sections/main/Main.tsx";
import {Works} from "./layout/sections/works/Works.tsx";

import {Skills} from "./layout/sections/skills/Skills.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Contatcs} from "./layout/sections/contacts/Contatcs.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


const App = () => {
    return (
        <>

            <Main/>
            <Skills/>
            <Works/>
            <About/>
            <Contatcs/>
            <Footer/>

        </>
    );
};

export default App;