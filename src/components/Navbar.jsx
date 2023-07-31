import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ logo, navLinks, isLoggedIn, userName, onLogout }) {
  return (
    <div className='nvbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            {/* <img className='LogoEdit' src="https://www.kindpng.com/picc/m/121-1219644_pubg-png-logo-hd-transparent-png.png" alt="Pubg Png Logo Hd, Transparent Png@kindpng.com"/> */}
            <img className="LogoEdit" src={logo} alt="logoImage" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink className="nav-link" activeclassname="active" to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {isLoggedIn ? userName : "My Account"}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <NavLink className="dropdown-item" activeclassname="active" to="/user">
                          Profile
                        </NavLink>
                        <NavLink className="dropdown-item" activeclassname="active" to="/setting">Setting</NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          activeclassname="active"
                          to="/"
                          onClick={onLogout}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      {/* <li>
                        <NavLink className="dropdown-item" activeclassname="active" to="/login">
                          Login
                        </NavLink>
                      </li> */}
                      <li>
                        <NavLink className="dropdown-item" activeclassname="active" to="/register">
                          Signup
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar({ logo, navLinks, isLoggedIn, userName, onLogout }) {
//     return (
//         <div>
//             <nav className="navStyle">
//                 <div>
//                     <img className="LogoEdit" src={logo} alt="logoImage" />
//                 </div>
//                 <div className="comp">
//                     {navLinks.map((link) => (
//                         <NavLink key={link.to} className="set" to={link.to}>
//                             {link.label}
//                         </NavLink>
//                     ))}
//                 </div>
//                 <div className="rightNav">
//                     <ul className="Navboy">
//                         <div class="dropdown">
//                             <button class={"btn btn-warning dropdown-toggle"} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                 {isLoggedIn ? (userName) : "My account"}
//                             </button>
//                             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                 {isLoggedIn ? (
//                                     <>
//                                         <li>
//                                             <NavLink className="dropdownitem text-success" to="/user">
//                                                 Profile
//                                             </NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink className="dropdown-item text-danger" to="/" onClick={onLogout}>
//                                                 Logout
//                                             </NavLink>
//                                         </li>
//                                     </>
//                                 ) : (
//                                     <>
//                                         {/* <li>
//                                             <NavLink className="user dropdown-item" to="/login">
//                                                 Login
//                                             </NavLink>
//                                         </li> */}
//                                         <li>
//                                             <NavLink className="user dropdown-item" to="/register">
//                                                 Signup
//                                             </NavLink>
//                                         </li>
//                                     </>
//                                 )}
//                             </ul>
//                         </div>
//                         {/* <li>
//                             <a href="#">
//                                 <i className="fa-solid fa-language"></i>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i className="fa-solid fa-shop"></i>
//                             </a>
//                         </li> */}
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;