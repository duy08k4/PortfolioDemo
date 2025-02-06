import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logoBox'></div>
            <div className='menu'>
                <a href="/" className='choice homePage'><i className="fas fa-home"></i></a>
                <a href="/" className='choice Page'><i className="fas fa-user-edit"></i></a>
                <a href="/" className='choice homePage'><i className="fas fa-folder"></i></a>
            </div>
        </div>
    )
}

export default Navbar