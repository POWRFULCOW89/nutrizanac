import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpeg';
// import logo2 from '../assets/logo2.jpeg';
// import logo3 from '../assets/logo3.jpeg';
import logo4 from '../assets/logo4.jpg';


const paths = [
    ['Inicio', '/'],
    ['Producto', '/producto'],
    ['Contacto', '/contacto']
];

const Navigation = props => {

    return <div className='row d-flex justify-content-center'>
        <div className='col-md-2 d-flex justify-content-center align-items-center'>
            <img
                className='img-fluid ' 
                alt='Logo' 
                style={{backgroundColor: 'red', width: 150, height: 150}} 
                src={logo4}
            />
        </div>

        <div className='col-md-9 '>
            <div className='row'>

                <div className='col-12 text-center display-4'>
                    NUTRIZANAC
                </div>
            </div>
            <hr />
            <div className='row'>
                {paths.map( arr => 
                    <Link className='col text-center border p-2 text-decoration-none' style={{color: '#00c70f'}} to={arr[1]} >{arr[0]}</Link>
                )}
            </div>
        </div>
        
        {/* <div className='col-md-2 '></div> */}
    </div>
}

export default Navigation;