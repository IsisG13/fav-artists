import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={styles.cabecalho}>
                <div className={styles.logo}></div>
                <nav className={styles.menu}>
                    <ul className={styles.menu__lista}>
                        <li className={styles.menu__item}><a className={styles.menu__link} href="#home">Início</a></li>
                        <li className={styles.menu__item}><a className={styles.menu__link} href="#cantores">Cantores</a></li>
                        <li className={styles.menu__item}><a className={styles.menu__link} href="#quemsomos">Nós</a></li >
                    </ul >
                </nav >
            </header >
        </div>
    )
}

export default Header
