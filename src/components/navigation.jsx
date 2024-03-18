function Navigation () {
    return(
        <nav>
        <div className="container nav-section">
          <div className="nav-logo">
            <img src="assets/brand_logo.png" alt="" />
          </div>

          <div className="nav-contents">
            <ul>
              <li>Menu</li>
              <li>Location</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="login-button">
            <button>Login</button>
          </div>
        </div>
      </nav>
    )
}


export default Navigation