import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.rodape}>
                <p className={styles.rodape__text}>Criado por Isis e Marcelly</p>
                <div className={styles.redes}>
                    <p className={styles.rodape__rs}>
                        Redes Sociais Isis:
                        <a href="https://github.com/IsisG13"
                            target="_blank" rel="noreferrer" className={styles.git}>
                            <BsGithub color="#000" size="1.6rem" />
                        </a>
                        <a href="https://www.instagram.com/isis.cristal13/" target="_blank" rel="noreferrer">
                            <BsInstagram color="#cd486b" size="1.6rem" />
                        </a>
                    </p>
                    <p className={styles.rodape__rs}>
                        Redes Sociais Marcelly:
                        <a href="https://github.com/MarcellyGuimaraes" target="_blank" rel="noreferrer" className={styles.git}>
                            <BsGithub color="#000" size="1.6rem" />
                        </a>
                        <a href="https://www.instagram.com/souzacelly14/" target="_blank" rel="noreferrer">
                            <BsInstagram color="#cd486b" size="1.6rem" />
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
