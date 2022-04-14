import React from 'react'
import styles from './Pessoas.module.css'

const Pessoas = () => {
    return (
        <div>
            <div className={styles.pessoas}>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemRoberta}></div>
                    <span className={styles.pessoa__nome}>Kamaitachi</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=x_4Rit4cfEI&list=OLAK5uy_mWL9PxnzQKDlc8t8YvG7GMSYSytDB8N1Y&ab_channel=kamaitachi">
                            música - Bicho Papão
                        </a>
                    </span>
                </div>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemMarcela}></div>
                    <span className={styles.pessoa__nome}>Billie Elish</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=Fcd8UbutjIg&list=PLsCPTY_MPoPZLKsjasPhYLuoWG-s-rdKq&index=5&ab_channel=BillieEilishVEVO">
                            música - Oxytocin
                        </a>
                    </span>
                </div>
                <div className={styles.pessoa}>
                    <div className={styles.pessoa__imagem} id={styles.pessoa__imagemAndreia}></div>
                    <span className={styles.pessoa__nome}>Lil peep</span>
                    <span className={styles.pessoa__funcao}>
                        <a className={styles.pessoa__link} href="https://www.youtube.com/watch?v=3rkJ3L5Ce80&list=PL_Om6vSzrlaSfAS-zVvN0eU_2nc4Qf2sZ&index=1&ab_channel=LilPeep">
                            música - Benz Truck
                        </a>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Pessoas
