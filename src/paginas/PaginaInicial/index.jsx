import styles from './PaginaInicial.module.scss';


import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from 'componentes/Banner';
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";



export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                 <Menu/>
                 <Banner/>
                </section>
                <div>
                    <Galeria/>
                </div>
            </main>
            <Rodape />
        </>
    )
}