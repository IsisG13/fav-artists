import React from 'react'
import styles from './Sobre.module.css'

const Sobre = () => {
    return (
        <div>
            <section className={styles.sobre}>
                <h2 className={styles.sobre__titulo}>Descubra os cantores que nós mais amamos!</h2>
                <p className={styles.sobre__descricao}>Esses cantores/bandas são incriveis, e você deve amá-los. Venha e descubra o nosso
                    (de Isis e Marcelly) gosto incrivel!</p>
            </section>
        </div>
    )
}

export default Sobre
