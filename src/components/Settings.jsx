import React from 'react'

function Settings() {
    return (
        <div>
            {/* <!-- Example single danger button --> */}
            <div class="btn-group">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Theme</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                    {/* <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Settings