import { useState } from "react"

export default function colabsServices() {
    const [colabsLoading, setColabsLoading] = useState(false)
    const [refetchColabs, setRefetchColabs] = useState(true)
    const [colabsList, setColabsList] = useState([])

    const url = 'http://localhost:3000/colabs'

    const getAvailableColabs = (userId) => {
        setColabsLoading(true)
        
        fetch(`${url}/availables`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.success) {
                setColabsList(result.body)
            } else {
                console.log(result)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setColabsLoading(false)
            setRefetchColabs(false)
        })
    }

    return { getAvailableColabs, colabsLoading, refetchColabs, colabsList }
}