import React from 'react'
import { Artists } from './Artists'
import styles from './Artistas.module.css'
import { BsInstagram, BsSpotify, BsYoutube } from 'react-icons/bs'

const Artistas = () => {

    const artists = Artists;

    return (
        <div className={styles.artists} id="cantores">
            {artists.map((artist) => (
                <div className={styles.artist} key={artist.id}>
                    <img className={styles.artist__imagem} src={artist.src} alt={artist.alt} />
                    <div className={styles.artist__conteudo}>
                        <h4 className={styles.artist__titlulo}>{artist.title}</h4>
                        <p className={styles.artist__descricao}>
                            {artist.text}
                        </p>
                        <ul className={styles.artist__lista}>
                            <li className={styles.artist__item}>
                                <a href={artist.instagram} target="_blank" rel="noreferrer">
                                    <BsInstagram color="#cd486b" size="1.6rem" />
                                </a>
                            </li>
                            <li className={styles.artist__item}>
                                <a href={artist.spotify} target="_blank" rel="noreferrer">
                                    <BsSpotify color="#24CC5C" size="1.6rem" />
                                </a>
                            </li>
                            <li className={styles.artist__item}>
                                <a href={artist.youtube} target="_blank" rel="noreferrer">
                                    <BsYoutube color="#FC0404" size="1.6rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Artistas
