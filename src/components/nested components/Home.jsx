import React from 'react';

function Home(props) {
    return (
        <div className='main'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6 col-md-4 text-center">
                        <img src={props.title} alt="main-img" className="img-fluid" />
                    </div>
                    <div className="col-12 text-center">
                        <h6>Check Our Deals to Buy UC</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

// import React from 'react'

// function Home(props) {

//     return (
//         <div className='main'>
//             <div>
//                 <img src={props.title} alt="main-image" />
//             </div>
//             <h3>Check Our Delas to Buy UC</h3>
//         </div>
//     )
// }

// export default Home