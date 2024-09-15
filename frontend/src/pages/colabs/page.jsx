import colabsServices from "../../services/colabs"
import { useEffect, useState } from "react"
import Loading from "../loading/page"
import ColabCard from "../../components/colabCard/colabCard"
import styles from './page.module.css'
import ColabPopup from "../../components/colabPopup/colabPopup"
import { useCartContext } from "../../contexts/useCartContext"

export default function Colabs() {

    const { getAvailableColabs, colabsList, colabsLoading, refetchColabs } = colabsServices()
    const [colabSelected, setColabSelected] = useState(null)
    const { addToCart } = useCartContext()


    useEffect(() => {
        if(refetchColabs) {
            getAvailableColabs()
        }
    }, [refetchColabs])

    const handleColabSelected = (colab) => {
        setColabSelected(colab)
    }

    const handleClosePopup = () => {
        setColabSelected(null)
    }

    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd)
        handleClosePopup()
    }

    if(colabsLoading) {
        return( <Loading /> )
    }

    return (
        <>
            <div>
                {colabsList.map((colab) => (
                    <div key={colab._id} className={styles.cardContainer} onClick={() => { handleColabSelected(colab) }}>
                        <ColabCard colabData={colab} />
                    </div>
                ))}
            </div>

            {colabSelected && (
                <ColabPopup 
                colabData={colabSelected} 
                onClose={handleClosePopup} 
                onAddToCart={handleAddToCart}
                />
            )}
        </>
    )
}