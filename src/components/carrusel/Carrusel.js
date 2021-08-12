import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../assets/img/escritorio.jpg'
import Img2 from '../../assets/img/notebook.jpg'
import Img3 from '../../assets/img/meze.jpg'

function Carrusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ 'height': "100vh", "objectFit": "cover" }}>
                    <img style={{ 'height': "100vh", "objectFit": "cover" }}
                        className="d-block w-100 img-fluid"
                        src={Img1}
                        alt="First slide"
                    />
                </Carousel.Item >
                <Carousel.Item style={{ 'height': "100vh", "objectFit": "cover" }}>
                    <img style={{ 'height': "100vh", "objectFit": "cover" }}
                        className="d-block w-100 img-fluid"
                        src={Img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "100vh", "objectFit": "cover" }}>
                    <img style={{ 'height': "100vh", "objectFit": "cover" }}
                        className="d-block w-100 img-fluid"
                        src={Img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrusel
