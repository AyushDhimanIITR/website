import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginForm">
            <label>E-mail</label>
            <input type="email" className="logininput" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="logininput" placeholder="Enter your password..." />
            <button className="loginButton">
                Log in
            </button>
        </form>
        <button className="registerbutton">
            Sign Up
        </button>
    </div>
  )
}
