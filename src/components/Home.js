import React from 'react';

const Home = props => {

    return <div className='container-fluid row d-flex justify-content-center mx-0 px-0 py-5'>
        <div className='col row d-flex justify-content-center align-items-center'>
            <div className='col-md-8 '>
                <div className='d-flex justify-content-left align-items-center h-100 h1'>
                    Texto introductorio que atraiga al cliente Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
            </div>
            <div className='col-md-4 '>
                <img className='img-responsive' alt='Imagen principal' src='https://via.placeholder.com/300' />
            </div>

        </div>
    </div>
}

export default Home;