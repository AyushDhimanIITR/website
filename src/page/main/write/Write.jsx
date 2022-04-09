import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_1280.jpg" className="formImg" alt="" />
        <form className="form">
            <div className="formGrp">
                <label htmlFor="inputtitle">

                </label>
                <input type="text" placeholder="Enter the Title..." className="inputtitle" autoFocus={true} />
                <input type="file" id="inputfile" className="inputtitle"  />
            </div>
            <div className="formGrp">
                <textarea name="" id="" cols="30" placeholder="Description..." className="inputtitle inputdesc" rows="10"></textarea>
            </div>
            <button className="submit">
                Post
            </button>
        </form>
    </div>
  )
}
