import './ItemDetail.css'
import ItemCount from '../ItemCount.js/ItemCount'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2 className='mt-4'>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>
                <div className='m-4 d-flex align-items-center row'>
                    <p className='px-5 m-0 d-flex align-items-center'>
                        BOUNCEVCARD es una plantilla de presentación personal que destaca por su diseño moderno y responsivo. Esta plantilla cuenta con varias secciones diseñadas para mostrar información sobre educación, experiencia y trabajo. Además, incluye características únicas como diseños únicos, fondos de paralaje y páginas de proyectos y blog que permiten presentar información de manera clara y efectiva.
                    </p>
                </div>
                <h5>Entre sus características, podemos destacar:</h5>

                <br />
                <div className='bullets_container row'>
                    <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                    <ul className='col-xxl-7 col-xl-8 col-lg-8 ul_bullets col-md-10 col-sm-10 col-10'>
                        <li>Diseño responsive, que garantiza que la plantilla se adapte a cualquier tamaño de pantalla.</li>
                        <li>Diseño retina ready, lo que significa que la plantilla tiene una alta resolución y una excelente calidad de imagen.</li>
                        <li>Cuatro opciones de navegación en una sola página, lo que permite una fácil exploración de la plantilla.</li>
                        <li>Código HTML5 y CSS3, que garantizan la compatibilidad y la velocidad de carga.</li>
                        <li>Diseño único, que le dará a su presentación personal un toque especial.</li>
                        <li>Feed de Twitter e Instagram, lo que le permite compartir su presencia en las redes sociales con sus visitantes.</li>
                        <li>Fondos de paralaje que crean un efecto visual impresionante.</li>
                        <li>Páginas de un solo proyecto que le permiten presentar sus proyectos de manera clara y concisa.</li>
                        <li>Página única del blog y página de detalles del blog, que le permiten compartir sus pensamientos y opiniones con su audiencia.</li>
                    </ul>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                </div>
                <br />
                En resumen, BOUNCEVCARD es una excelente opción para cualquier profesional que quiera destacar en línea.
            </p>
            <img className='img__itemDetail' src={img} alt={nombre} />
            <ItemCount stock={10} inicial={1}/>
        </div>
    )
}

export default ItemDetail