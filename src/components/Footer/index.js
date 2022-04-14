import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.rodape}>

                <p className={styles.pessoa__text}>Criado por Isis e Marcelly</p>

                <div className={styles.redes}>
                    <div className={styles.rede__pessoa}>
                        <p className={styles.pessoa__text}>Contatos Isis: </p>
                        <a href="https://github.com/IsisG13" target="_blank" rel="noreferrer">
                            <BsGithub className={styles.gitHub} />
                        </a>
                        <a href="https://www.instagram.com/isis.cristal13/" target="_blank" rel="noreferrer">
                            <BsInstagram className={styles.instagram} />
                        </a>
                    </div>

                    <div className={styles.rede__pessoa}>
                        <p className={styles.pessoa__text}>Contatos Celly: </p>
                        <a href="https://github.com/MarcellyGuimaraes" target="_blank" rel="noreferrer">
                            <BsGithub className={styles.gitHub} />
                        </a>
                        <a href="https://www.instagram.com/souzacelly14/" target="_blank" rel="noreferrer">
                            <BsInstagram color="#cd486b" size="1.6rem" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
