import React from 'react';

function Home(props) {
    return (
        <div className="container main">
            <div className="row justify-content-center align-items-center">
                <div className="col-6 col-md-6 text-center">
                    <img src={props.title} alt="main-image" className="img-fluid" />
                </div>
                <div className="col-12 text-center">
                    <h3>Check Our Deals to Buy UC</h3>
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