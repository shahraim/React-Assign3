import React, { useState } from 'react';
import Error from './Error';

function Settings({ userName, isLoggedIn }) {

    return (
        <div className='container'>
            {isLoggedIn ? (
                <>
                 setting
                </>
            ) : (<Error/>)
            }
        </div>
    );
}

export default Settings;
