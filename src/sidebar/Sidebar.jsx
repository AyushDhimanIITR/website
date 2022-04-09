import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About me</span>
          <img src="" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo earum assumenda vitae quos accusamus necessitatibus nulla illum! Ipsa rerum sint cum expedita eligendi iste repellendus eos atque assumenda nesciunt!</p>
          </div> 
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarItemList">option 1</li>
              <li className="sidebarItemList">option 2</li>
              <li className="sidebarItemList">option 3</li>
              <li className="sidebarItemList">option 4</li>
            </ul>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
            <i className="social-sidebar-icon fa-brands fa-instagram"></i>
            <i className="social-sidebar-icon fa-brands fa-facebook"></i>
            <i className="social-sidebar-icon fa-brands fa-twitter"></i>
            </div>
            </div>
          
    </div>
  )
}
