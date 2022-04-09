import "./single.css"
import Sidebar from "../../../sidebar/Sidebar"
import FirstPost from "../../../FirstPost/FirstPost"

export default function Single() {
  return (
    <div className="single">
        
        <FirstPost/>
        <Sidebar/>
    </div>
  )
}
