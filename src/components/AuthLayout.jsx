import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected ({
    children, authentication = true
}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.state)

    useEffect(() => {

        // TODO make it more easy to understand

        // if(authStatus === true){
        //     navigate("/")
        // }else if(authStatus === false) {
        //     navigate("/login")
        // }

        // let authValue = auth === true ? true : false

         
        if(authentication && auth !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authentication, navigate, authStatus])

  return loader? <h1>Loading...</h1>: <>{children}</>
}

