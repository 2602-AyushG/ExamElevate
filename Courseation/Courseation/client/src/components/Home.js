import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <div className="home">
                {/* Section-1 starts */}
                <div className="section container my-5 d-flex flex-column justify-content-center" id="section-1" style={{ height: '500px' }}>
                    {/* Heading */}
                    <div className="section-1-heading mb-5" style={{ width: '30%' }}><h1>India's largest learning platform</h1></div>

                    {/* Button */}
                    <div className="section-1-button mb-4"><Link to="/explore"><button type="button" className="btn btn-success">Start learning</button></Link></div>

                    {/* Subheading */}
                    <div className="section-1-subheading d-flex flex-row">
                        <div className="section-1-subheading1" style={{ width: '13%', color: 'rgb(140 141 143)' }}>Popular courses :</div>

                        <div className="section-1-subheading2 d-flex flex-row" style={{ color: '#6EC397' }}>
                            <div className="section-1-course-1 me-3">Data Structures & Algorithms</div>
                            <div className="section-1-course-2 me-3">Algorithm Design & Analysis</div>
                            <div className="section-1-course-3 me-3">Operating Systems</div>
                            <div className="section-1-course-4 me-3">Computer Networks</div>
                        </div>
                    </div>
                </div>
                {/* Section-2 starts */}
                <div id="section-2" className="section container d-flex justify-content-center my-5" >
                    {/* 3 cards telling benefits of joining courseation */}
                    <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                        <img src="../images/live-classes.png" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h4 className="card-title">Daily live classes</h4>
                            <p className="card-text">Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
                        </div>
                    </div>

                    <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                        <img src="../images/revise.png" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h4 className="card-title">Practice and revise</h4>
                            <p className="card-text">Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
                        </div>
                    </div>

                    <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                        <img src="../images/learn.png" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h4 className="card-title">Learn anytime, anywhere</h4>
                            <p className="card-text">One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
                        </div>
                    </div>
                </div>
                {/* Section-3 starts */}
                <div id="section-3" className="section container my-5 d-flex align-items-center"  style={{ height: 'inherit' }}>
                    {/* Left subsection */}
                    <div className="left-subsection-3 d-flex flex-column justify-content-center mx-auto">
                        {/* Heading */}
                        <div className="heading-section-3 mb-5" style={{ width: '60%' }}><h1>Get the learning app</h1></div>

                        {/* Subheading */}
                        <div className="subheading-section-3 mb-4" style={{ width: '60%' }}><p>Download lessons and learn anytime, anywhere with the Courseation app</p></div>

                        {/* Download App */}
                        <div className="w-50">
                            <img src="../images/download-app.png" className="img-fluid" alt="download-app" />
                        </div>
                    </div>

                    {/* Right subsection */}
                    <div className="right-subsection-3 mx-auto">
                        {/* Video on autoplay and loop mode */}
                        <video width="500" height="500" autoPlay loop>
                            <source src="../images/download-app.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                {/* Section-4 starts */}
                <div className="section container my-5 d-flex flex-row align-items-center" id="section-4" style={{ height: '700px' }}>
                    {/* Left subsection */}
                    <div className="left-subsection-4 d-flex flex-column justify-content-center ms-5">
                        {/* Heading */}
                        <div className="heading-section-4 mb-5" style={{ width: '60%' }}><h1>Start Learning with Courseation</h1></div>

                        {/* Subheading */}
                        <div className="subheading-section-4 mb-4" style={{ width: '50%' }}>Get unlimited access to structured courses & doubt clearing sessions</div>

                        {/* Button */}
                        <div className="button-section-4"><Link to="/explore"><button type="button" className="btn btn-success">Start learning</button></Link></div>
                    </div>

                    {/* Right Subsection */}
                    <div className="right-subsection-4 ms-5">
                        {/* 5 cards describing significant numbers of Courseation */}
                        <div className="card about-courseation-card" id='courses-card'><img src="../images/courses.png" className="card-img-top" alt="..." /></div>
                        <div className="card about-courseation-card" id='live-sesssion-card'><img src="../images/live-session.png" className="card-img-top" alt="..." /></div>
                        <div className="card about-courseation-card" id='educators-card'><img src="../images/educators.png" className="card-img-top" alt="..." /></div>
                        <div className="card about-courseation-card" id='mins-watched-card'><img src="../images/mins-watched.png" className="card-img-top" alt="..." /></div>
                        <div className="card about-courseation-card" id='video-lessons-card'><img src="../images/video-lessons.png" className="card-img-top" alt="..." /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
