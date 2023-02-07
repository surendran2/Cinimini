import React from "react";
import "./about_us.css";

const AboutUs = () => {


    return (
        <div class='aboutus'>
            <div class="about-section">
                <h1>About Us</h1>
                <p>Connecting movie fans with their
                    favorite content worldwide.</p>
                <p>We show you where you can legally watch movies and TV shows that you love. You are kept up to date with what is new on Netflix, Amazon Prime, Apple TV and many other streaming platforms. Our simple filter system allows you to see only what is important to you.
                    We also allow users to track their favorite shows and movies, and can notify you when a title is available on one of your services.</p>
            </div>
            <div class="row">
            <div class="col-md-4">
            </div>

                <div class="col-md-4">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Jane" style={{width:'100%'}} />
                            <div class="container"  style={{textAlign:'center'}}>

                                <h2>Surendran I</h2>
                                <p class="title">Sofware Engineer.</p>
                                <p style={{color:'blue'}}>isurendran777@gmail.com</p>
                                <p>Contact Number: 9361149796</p>

                                
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}
export default AboutUs