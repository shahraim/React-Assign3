import React from 'react'

function Home(props) {

    return (
        <div className='main'>
            <div>
                <img src={props.title} alt="main-image" />
            </div>
            <h3>Check Our Delas to Buy UC</h3>
        </div>
    )
}

export default Home