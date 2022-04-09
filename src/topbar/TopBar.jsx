import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="l">
            <i className="socialicon fa-brands fa-instagram"></i>
            <i className="socialicon fa-brands fa-facebook"></i>
            <i className="socialicon fa-brands fa-twitter"></i>
            </div>
        <div className="c">
            <ul className="listitems">
                <li className="menuitems">Menu</li>
                <li className="menuitems">About Us</li>
                <li className="menuitems">Contact Us</li>
                <li className="menuitems">Login</li>
                <li className="menuitems">Register</li>
            </ul>
        </div>
        <div className="r">
        <i className="search  fa-solid fa-magnifying-glass"></i> 
        </div> 
    </div>
  )
}
