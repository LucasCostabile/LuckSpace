import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <h1>Luck Space</h1>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} 
                    type="text" 
                    placeholder="O que você procura ?"
                />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}