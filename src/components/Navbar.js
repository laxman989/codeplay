import Logo from "../images/logo.png";


const Navbar = () => {


    return (
        <div className="navbar">
            <div className="nav-1">
                <img className="logo" src={Logo} alt="Logo" />
                <p className="title">CODEPLAY</p>
            </div>
            <div className="nav-2">

            </div>
        </div>
    )
}

export default Navbar;