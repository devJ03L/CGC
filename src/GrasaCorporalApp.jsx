import { GrasaCorporalContext } from "./context/GrasaCorporalContext";
import { useContext } from "react";
import {
    Header,
    Descripcion,
    BarraResultado,
    Formulario,
    ListaNiveles
} from "./components/index";

export const GrasaCorporalApp = () => {

    const { grasaCorporalInfo } = useContext(GrasaCorporalContext)

    return (
        <>
            <Header />
            <div className="row">
                <div id="formulario">
                    <Descripcion />
                    <Formulario />
                </div>
                <div id="resultado">
                    {
                        grasaCorporalInfo &&
                        <>
                            <BarraResultado porcentage={grasaCorporalInfo.porcentage} />
                            <ListaNiveles genero={grasaCorporalInfo.genero} />
                        </>
                    }
                </div>
            </div>
        </>

    )
}
