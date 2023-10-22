import imgFoud from './notfound.png'
import '../../App.css'
import { Link } from 'react-router-dom'
import { Back } from '../../icons/incon'

const NotFound = () => {
    return (
        <section className='not-page'>
            <h1>pagina no encontrada</h1>
            <Link to ={`/`} className="nFoundBack"> <Back/> </Link>
            <img className="found-Img " src={imgFoud} alt="PageNotFound" />     
        </section>
    )
}

export default NotFound