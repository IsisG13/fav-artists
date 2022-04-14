import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div>
            <section className={styles.banner} id="home">
                <div className={styles.banner__imagem}></div>
                <h2 className={styles.banner__titulo}>Esses são nossos artistas favoritos!</h2>
            </section>
        </div>
    )
}

export default Banner
