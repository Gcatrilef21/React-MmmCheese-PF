import imgFoud from './notfound.png'
import './notFound.css'
import { Link } from 'react-router-dom'
import { Back } from '../../icons/incon'

const NotFound = () => {
    return (
        <section className='container notFound'>
            <div className='info'>
                <Link to ={`/`} className="back"> <Back/></Link>
                <h4 className='text-found'>Lo sentimos, no encontramos nada...</h4>
            </div>
            <h5 className='text-error'><strong>Pagina No Encontrada</strong></h5>
            <img className="found-Img " src={imgFoud} alt="PageNotFound" />     
        </section>
    )
}

export default NotFound