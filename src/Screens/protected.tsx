import { useEffect, useState } from "react"
import loading from '../Assets/loading.jpg'
import { useNavigate } from "react-router-dom"
import { FbAuth } from "../config/Firebase/firebasemethods"




export default function Protected(props: any) {

    const { Screen } = props
    const [loader, setloader] = useState<any>(true)
    const navigate = useNavigate()
    
    let checkAuth = () => {
        setloader(true)
        FbAuth().then(res => {
            setloader(false)
            navigate("/profile")
        }).catch(err => {
            setloader(true)
            navigate("/signup")
        })

    }
    useEffect(() => {
        checkAuth()
    }, [])

    return loader ? <>
        <div className="flex justify-center text-center">
            <img src={loading} height={300} width={600} />
            <h1>This might take few seconds</h1>
        </div>
    </>

        : <Screen />
}