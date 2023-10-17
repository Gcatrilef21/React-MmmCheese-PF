import { Navigate } from "react-router-dom"


const PrivateRoute = ({children , session }) => {

    if(!session) return <Navigate to='/login' replace />
    
    return children
}

export default PrivateRoute