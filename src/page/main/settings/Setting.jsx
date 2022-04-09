import "./setting.css"
import Sidebar from "../../../sidebar/Sidebar"
export default function Setting() {
  return (
    <div className="setting">
        <div className="settingwrap">
            <div className="settingtitle">
                <span className="settingupdatetitle">Update ypur account</span>
                <span className="settingupdatetitle">Update ypur account</span>
            </div>
            <form className="settingform">
                <label>Profile picture</label>
                <div className="settingPP">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                </div>
                <label>Username</label>
                <input type="text" placeholder="username" />
                <label>E-mail</label>
                <input type="email" placeholder="E-mail" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsubmit">Submit</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
