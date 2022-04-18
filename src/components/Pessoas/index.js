import React from 'react'
import styles from './Pessoas.module.css'

const Pessoas = () => {

    const nos = [
        {
            id: 1,
            nome: 'Marcelly',
            text: 'Tenho 15 anos, amo ouvir música e assistir anime',
            text2: 'Animes favoritos: Death Note, Demon Slayer',
            img: styles.pessoa__imagemRoberta
        },
        {
            id: 2,
            nome: 'Isis - Marcelly',
            text: 'Gostamos de ouvir musicas, temos estilos diferentes',
            text2: 'gostamos de kamaitachi - animal preferido: cachorro',
            img: styles.pessoa__imagemMarcela
        },
        {
            id: 3,
            nome: 'Isis',
            text: 'Tenho 13 anos, aniversario: 08/ 05 - signo: touro',
            text2: 'gosto ver coisas sobre signos e ouvir musica',
            img: styles.pessoa__imagemAndreia
        }
    ]

    return (
        <div className={styles.pessoas}>
            {nos.map((pss) => (
                <div className={styles.pessoa} key={pss.id}>
                    <div className={styles.pessoa__imagem} id={pss.img}></div>
                    <span className={styles.pessoa__nome}>{pss.nome}</span>
                    <span className={styles.pessoa__funcao}>
                        <p className={styles.pessoa__link}>{pss.text}</p>
                        <p className={styles.pessoa__link}>{pss.text2}</p>
                    </span>
                </div>
            ))}
        </div >
    )
}

export default Pessoas
