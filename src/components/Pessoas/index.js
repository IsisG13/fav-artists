import React from 'react'
import styles from './Pessoas.module.css'

const Pessoas = () => {
    return (
        <div>
            <div className={styles.pessoas}>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemRoberta}></div>
                    <span className={styles.pessoa__nome}>Marcelly</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=x_4Rit4cfEI&list=OLAK5uy_mWL9PxnzQKDlc8t8YvG7GMSYSytDB8N1Y&ab_channel=kamaitachi">
                            Tenho 15 anos - Aniversario: 09/ 07 - signo: leão <hr /> gosto de ouvir musica
                        </a>
                    </span>
                </div>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemMarcela}></div>
                    <span className={styles.pessoa__nome}>Isis - Marcelly</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=Fcd8UbutjIg&list=PLsCPTY_MPoPZLKsjasPhYLuoWG-s-rdKq&index=5&ab_channel=BillieEilishVEVO">
                            Gostamos de ouvir musicas, temos estilos diferentes <hr />gostamos de kamaitachi - animal praferido: cachorro
                        </a>
                    </span>
                </div>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemAndreia}></div>
                    <span className={styles.pessoa__nome}>Isis</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=3rkJ3L5Ce80&list=PL_Om6vSzrlaSfAS-zVvN0eU_2nc4Qf2sZ&index=1&ab_channel=LilPeep">
                            Tenho 13 anos, aniversario: 08/ 05 - signo: touro <hr />
                            gosto ver coisas sobre signos e desenhar
                        </a>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Pessoas
