import "./blogpost.css"

export default function BlogPost() {
    return (
        <div className="blogpost">
            <img className="postImg" src="https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_1280.jpg" alt="" />
            <div className="postInfo">
                <div className="postdescr">
                    <div className="postdesc">Category</div>
                </div>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit Quia</span>
            <hr />
            <span className="postDate">1 hour ago</span>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum earum pariatur consectetur distinctio optio id perferendis odit, quos quas sed ad tempora laboriosam, numquam possimus. Blanditiis voluptatibus expedita totam nam.
            rum pariatur consectetur distinctio optio id perferendis odit, quos quas sed ad tempora laboriosam, numquam possimus. Blanditiis voluptatibus expedita totam nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum earum pariatur consectetur distinctio optio id perferendis odit, quos quas sed ad tempora laboriosam, numquam possimus. Blanditiis voluptatibus expedita totam nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum earum pariatur consectetur distinctio optio id perferendis odit, quos quas sed ad tempora laboriosam, numquam possimus. Blanditiis voluptatibus expedita totam nam.</p>
        </div>
    )
}
