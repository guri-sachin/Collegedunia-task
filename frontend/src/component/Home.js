import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setlogin] = useState(true);
  const [signup, setsignup] = useState(false);
  function s2() {
    setlogin(false);
    setsignup(true);
  }
  function s3() {
    setlogin(true);
    setsignup(false);
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    
  };
  const  [password, setPassword] =useState('');
  const  [email, setEmail] =useState('');
  const  [Cpassword, setCpassword] =useState('');
  const  [phone, setPhone] =useState('');
  const  [username, setUsername] =useState('');
 
  const navigate = useNavigate();
  const location = useLocation();
  function handelDemo2(e)
  {
    setEmail(e.target.value);
    console.log("email",email);
  }
  function handelDemo1(e)
  {
    setPassword(e.target.value);
  }
  function handelDemo5(e)
  {
    setPhone(e.target.value);
  }
  function handelDemo4(e)
  {
    setCpassword(e.target.value);
  }
  function handelDemo3(e)
  {
    setUsername(e.target.value);
  }


  async function Show1(e)
{
  e.preventDefault(); // Prevent the default form submission behavior

    const data2 ={"email":email,"password":password};
    
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
  
const response = await fetch ('http://localhost:4200/login',config)

const data3 = await response.json();
console.log(data3)
if(data3.status =="200"){
 
 sessionStorage.setItem("data", JSON.stringify(data3));

    navigate("/Dasboard")

 }
else{

 Swal.fire({
   icon: 'warning',
   // title: 'Password Changed',
   text: "wrong email or password",
})
}
}

async function Show2(e)
{
  e.preventDefault(); // Prevent the default form submission behavior
  if(Cpassword !== password) {  
     
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "password and confirm password not match",
 })
    return false; 
 }else if(username.length != 0 && phone.length ==10){ 
    const data2 ={"username":username,"email":email,"password":password,"phone":phone}
    
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
  
const response = await fetch ('http://localhost:4200/sign',config)

const data3 = await response.json();
console.log(data3)
if(data3.status =="200"){
 
  Swal.fire({
    icon: 'success',
    // title: 'Password Changed',
    text: "your acount created",
 })
}
else if(data3.status =="400")
{
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "email already exists",
 })
}
else if(data3.status =="500")
{
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "server error",
 })
}
  
  else{

 Swal.fire({
   icon: 'warning',
   // title: 'Password Changed',
   text: "all the fields required",
})
}
 }else{
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "phone no should 10 digit or username error",
 })
 }
}
  return (
    <div>
      <div class="navbar container-fluid " id="navbar" style={{ backgroundColor: "#000000" }}>
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle navbar-default"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">
            <span>Zoutons</span>
            <span class="vertical-text">.com</span>
          </a>
        </div>
        <div class="collapse navbar-right navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            {/* <button
              type="button"
              class="btn btn-info"
              data-toggle="modal"
              data-target="#myModal"
              style={{
                borderRadius: "50px",
                margin: "0px",
                padding: "0px",
                width: "100px",
                height:"40px"
               
              }}
            >
              <li >Login</li>
            </button> */}
            <button type="button" class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal" style={{
                borderRadius: "50px",


              }}>Login</button>
            &nbsp;    &nbsp;
            <button type="button" class="btn btn-light" data-toggle="modal"
              data-target="#myModal" style={{

                borderRadius: "50px",
                color: "black"

              }}>Signup</button>
            {/* <button
              className="btn btn-light"
              style={{
                borderRadius: "50px",
                margin: "0px",
                padding: "0px",
                width: "100px",
                color: "blue",
              }}
            >
              <li>Signup</li>
            </button> */}
          </ul>
        </div>
      </div>
      <nav
        class="navbar navbar-default"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"></a>
          </div>
          <ul class="nav navbar-nav ">
            <li class="nav-item">
              <a class="nav-link active" href="#" style={{ color: "white" }}>
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                CATEGORES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                STORES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                TOP COUPENS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                FEATURED COUPENS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                NEWQ
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="para">
        <h3>Find the best deal today in india</h3>
        <center>
          {/* <input type="text" placeholder="search for coupon,deals,stores etc."></input> */}
          <header>
            <nav>
              <div class="search-bar">
                <form class="search">
                  <input
                    type="search"
                    class="search__input"
                    name="search"
                    placeholder="search for coupon,deals,stores etc"
                    required
                  />
                  <button class="search__btn">Search</button>
                  <i class="ion-ios-search search__icon"></i>
                </form>
              </div>
            </nav>
          </header>

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <div id="ff">
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "24px",
                      padding: "10px",
                    }}
                  >
                    FEATURED STORIES
                    <span
                      style={{
                        float: "right",
                        fontSize: "24px",
                        padding: "0px",
                        color: "white",
                      }}
                    >
                      View More
                    </span>
                  </h3>
                </div>
                <br />
                <div class="flex-container wrap">
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        10 Coupon
                      </div>
                    </div>
                  </div>
                  <div class="flex-item">



                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        15 Coupon
                      </div>
                    </div>


                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Booking_com_1601290906.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        16 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Booking_com_1601290906.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        20 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Booking_com_1601290906.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        25 Coupon
                      </div>
                    </div>

                  </div>


                </div>{" "}
                <div class="flex-container wrap">

                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Swiggy_1546412149.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        10 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/McDonalds14-1477037048.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        5 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/kfc_1505977753.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        14 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Unacademy_1609938313.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        19 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        23 Coupon
                      </div>
                    </div>

                  </div>
                </div>{" "}
                <div class="flex-container wrap">

                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Swiggy_1546412149.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        8 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/McDonalds14-1477037048.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        14 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/kfc_1505977753.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        11 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Unacademy_1609938313.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        13 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        19 Coupon
                      </div>
                    </div>

                  </div>
                </div>{" "}
              </div>

              <div class="item">
                <div id="ff">
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "24px",
                      padding: "10px",
                    }}
                  >
                    FEATURED STORIES
                    <span
                      style={{
                        float: "right",
                        fontSize: "24px",
                        padding: "0px",
                        color: "white",
                      }}
                    >
                      View More
                    </span>
                  </h3>
                </div>
                <br />
                <div class="flex-container wrap">

                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Swiggy_1546412149.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        19 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/McDonalds14-1477037048.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        16 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/kfc_1505977753.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        17 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Unacademy_1609938313.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        23 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        3 Coupon
                      </div>
                    </div>

                  </div>
                </div>{" "}<div class="flex-container wrap">

                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Swiggy_1546412149.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        7 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/McDonalds14-1477037048.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        18 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/kfc_1505977753.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        30 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Unacademy_1609938313.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        21 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        26 Coupon
                      </div>
                    </div>

                  </div>
                </div>{" "}<div class="flex-container wrap">

                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Swiggy_1546412149.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        9 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/McDonalds14-1477037048.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        12 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/kfc_1505977753.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        30 Coupon
                      </div>
                    </div>

                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Unacademy_1609938313.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        20 Coupon
                      </div>
                    </div>
                    <img src=""></img>
                  </div>
                  <div class="flex-item">
                    <div class="image-container">
                      <img
                        src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-200,h-80,c-force"
                        alt="Coupon Image"
                      />
                      <div class="overlay">
                        <br />
                        10 Coupon
                      </div>
                    </div>

                  </div>
                </div>{" "}
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left" style={{backgroundColor:"#55aced", fontWeight:"normal", borderRadius:"20px", fontSize:"18px", paddingTop:"5px",marginLeft:"76px",marginTop:"-25px",color:"white"}}></span>
              <span class="sr-only" >Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right" style={{backgroundColor:"#55aced", fontWeight:"normal", borderRadius:"20px", fontSize:"18px", paddingTop:"5px", marginRight:"85px",marginTop:"-25px",color:"white"}}></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </center>
      </div>

      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="myModal"
        role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="modal-body"
              style={{ height: "540px", margin: "0px", padding: "0px", width: "100%" }}
            >
              <div className="container" style={{ width: "100%" }}>
                <div className="row" >
                  <div
                    className="col-md-4"
                    style={{ paddingLeft: "0px" }}
                    id="ii"
                  >
                    <img
                      src="./jk.png"
                      style={{ height: "540px" }}
                      alt="modal content"
                      className="i"
                    />
                  </div>
                  <div className="col-md-8" >
                    <button
                      onClick={toggleModal}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        float: "right",
                      }}
                    >
                      X
                    </button>
                    <br />
                    <br />
                    <center id="center">
                      <button
                        onClick={s3}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#f6bb43",
                          fontSize: "20px",
                          margin: "20px",
                        }}
                      >
                        Login
                      </button>

                      <span style={{ color: "#f6bb43" }}>|</span>
                      <button
                        onClick={s2}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#f6bb43",
                          fontSize: "20px",
                          margin: "20px",
                        }}
                       
                      >
                        Signup
                      </button>
                      <br />
                      {login && (
                        <form>
                          <input type="text" placeholder="Email" onChange={handelDemo2}></input>
                          <br />
                          <input type="password" placeholder="Password" onChange={handelDemo1}></input>
                          <br />
                          <input type="checkbox"></input>
                          <span>Remember me</span>
                          <span style={{ float: "right", marginRight: "80px" }}>
                            Forgot Your Password ?
                          </span>
                          <br />
                          <br />
                          <button
                            className="btn btn-info"
                            style={{
                              width: "70%",
                              height: "50px",
                              fontSize: "20px",
                            }}
                            id="loginb"
                            onClick={Show1}
                          >
                            LOGIN 
                          </button>
                          <hr style={{ width: "70%", height: "3px" }} />
                          <button
                            className="btn btn-light"
                            style={{
                              width: "70%",
                              height: "50px",
                              backgroundColor: "#3b5998",
                              color: "white",
                            }}
                          >
                            <img src="./g.png" style={{ height: "20px" }}></img>{" "}
                            Login With Google
                          </button>
                          <br />
                          <button
                            className="btn btn-info"
                            style={{
                              width: "70%",
                              height: "50px",
                              marginTop: "10px",
                            }}
                          >
                            <img src="./f.png" style={{ height: "20px" }}></img>
                            Login With Facebook
                          </button>
                          <br />
                          <span>Sign In and Get Updated</span>
                        </form>
                      )}
                      {signup && (
                        <form>
                          <input type="text" placeholder="Full Name" onChange={handelDemo3}></input>
                          <br />
                          <input type="email" placeholder="Email" onChange={handelDemo2}></input>
                          <br />
                          <input
                            type="number"
                            placeholder="Mobile Number"
                            onChange={handelDemo5}
                          ></input>
                          <br />
                          <input type="password" placeholder="Password" onChange={handelDemo1}></input>
                          <br />
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handelDemo4}></input>
                       

                          <button
                            className="btn btn-info"
                            style={{
                              width: "70%",
                              height: "45px",
                              fontSize: "20px",
                            }}
                            onClick={Show2}
                          >
                            REGISTER
                          </button>
                        </form>
                      )}
                    </center>
                    <center></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
