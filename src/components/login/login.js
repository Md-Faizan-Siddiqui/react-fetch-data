import "./login.css"


function Login() {

    return (
        <div className="login">
        <h1>Login</h1>
        <input type="email" className="email" placeholder="Enter Your Email"/> <br></br>
        <input type="password" className="pas" placeholder="Enter Your Password"/> <br></br>
        <button className="btn">Login</button>

        </div>
    )
}
export default Login; 