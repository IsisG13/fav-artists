import React from 'react'
import Pessoas from '../Pessoas'
import styles from './/QuemSomos.module.css'

const QuemSomos = () => {
    return (
        <div>
            <section className={styles.quemSomos} id="quemsomos">
                <div className={styles.quemSomosText}>
                    <h3 className={styles.quemSomos__titulo}>Quem somos</h3>
                    <p className={styles.quemSomos__descricao}>Conheça a comunidade por trás da iniciativa</p>
                </div>
                <Pessoas />
            </section>
        </div>
    )
}

export default QuemSomos
