import { Dialog } from "@mui/material"
import styles from './colabPopup.module.css'

export default function ColabPopup({ colabData, onClose, onAddToCart }) {

    return(
        <Dialog open={true} onClose={onClose}>
            <div className={styles.popupContainer}>
                <img src={colabData.imgUrl} alt="" />
                <div className={styles.popupContent}>
                    <h2>{colabData.name}</h2>
                    <p className={styles.cetegory}>[{String(colabData.category)}]</p>
                    <p>{colabData.description}</p>
                    <h2>€ {colabData.price}</h2>
                    <button onClick={() => { onAddToCart(colabData) }}>Appointment</button>
                </div>
            </div>
        </Dialog>
    )
}