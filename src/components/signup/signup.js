import "./signup.css"



function Singup() {


    return (
        <div className="login">
        <h1>Singup</h1>
        <input type="text" className="name" placeholder="Enter Your Name"/> <br></br>
        <input type="email" className="email" placeholder="Enter Your Email"/> <br></br>
        <input type="number" className="phone" placeholder="Enter Your Phone"/> <br></br>
        <input type="password" className="pas" placeholder="Enter Your Password"/> <br></br>
        <button className="btn">Sign Up</button>

        </div>
    )
    
}
export default Singup;