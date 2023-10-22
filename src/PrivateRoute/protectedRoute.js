


const ProtectedRoute = ({children}) => {

    // logica
    if(!session) return <Navigate to='/login' replace />
    return children

}

export default ProtectedRoute