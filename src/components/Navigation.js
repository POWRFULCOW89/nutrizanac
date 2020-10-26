import React from 'react';
import { Link } from 'react-router-dom';

const paths = [
    ['Inicio', '/'],
    ['Producto', '/producto'],
    ['Contacto', '/contacto']
];

const Navigation = props => {

    // return <div className='navbar border shadow p-3 mb-3 bg-white rounded '>
    //     <div className='navbar-brand col-sm '>
    //         <span className='h4'>Nutrizapp</span>
    //     </div>
    //     <div className='col-sm row'>
    //         {[ 
    //             ['Home', '/'],
    //             ['Projects', '/projects']
    //         ].map( arr => 
    //             <Link key={arr[0]} to={arr[1]} className='border btn btn-default col-sm'>
    //                 {arr[0]}
    //             </Link>
    //         )}
    //     </div>
    // </div>
    return <div className='row border shadow p-3 mb-3 bg-white mx-0 px-0'>
        <div className='col-md-2 '>
            <img
                className='img-responsive' 
                alt='Logo' 
                style={{width: '100%', height: '100%', backgroundColor: 'red'}} 
                src='https://via.placeholder.com/150'
            />
        </div>

        <div className='col-md-8 '>
            <div className='row'>
                <div className='col-12 text-center display-4'>
                    NUTRIZAPP
                </div>
            </div>
            <hr />
            <div className='row'>
                {paths.map( arr => 
                    <Link className='col  text-center border p-2 text-decoration-none' to={arr[1]} >{arr[0]}</Link>
                )}
            </div>
        </div>
        
        <div className='col-md-2 '></div>
    </div>
}

export default Navigation;