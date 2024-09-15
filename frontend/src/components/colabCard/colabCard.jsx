import styles from './colabCard.module.css'

export default function ColabCard({ colabData }) {
    return(
        <>
            <div className={styles.cardContainer}>
                <img src={colabData.imgUrl} alt="" />
                <div className={styles.cardContent}>
                    <h4>{colabData.name}</h4>
                    <h3 className={styles.price}>€ {colabData.price}</h3>
                </div>
            </div>
        </>
    )
}