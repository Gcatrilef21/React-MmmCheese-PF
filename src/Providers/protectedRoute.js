


const ProtectedRoute = ({children}) => {

    // logica
    if (!session) return <p>falta autenticar</p>


    return children

}

export default ProtectedRoute