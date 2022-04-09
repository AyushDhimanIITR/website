import Header from "../../header/Header"
import Post from "../../posts/Post"
import Sidebar from "../../sidebar/Sidebar"
import "./main.css"

export default function Main() {
  return ( 
    <>
        <Header/>
    <div className="home">
        <Post/>
        <Sidebar/>
    
    </div>
    </>
  )
}
