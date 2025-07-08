import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <div className="home">
                {/* Section-1 starts - Merged with Section-2 */}
                <div className="section" id="section-1">
                    {/* Hero Section - Top Row */}
                    <div className="hero-row mb-5">
                        {/* Left side content */}
                        <div className="section-1-left">
                            {/* Heading */}
                            <div className="section-1-heading mb-5"><h1>India's largest learning platform</h1></div>

                            {/* Button */}
                            <div className="section-1-button mb-4"><Link to="/explore"><button type="button" className="btn btn-success">Start learning</button></Link></div>

                            {/* Subheading */}
                            <div className="section-1-subheading">
                                <div className="section-1-subheading1 mb-3">Popular courses :</div>

                                <div className="section-1-subheading2">
                                    <div className="section-1-course-1">Data Structures & Algorithms</div>
                                    <div className="section-1-course-2">Algorithm Design & Analysis</div>
                                    <div className="section-1-course-3">Operating Systems</div>
                                    <div className="section-1-course-4">Computer Networks</div>
                                </div>
                            </div>
                        </div>

                        {/* Right side image */}
                        <div className="section-1-right">
                            <div className="student-illustration">
                                <img src="/images/childstudy.gif" alt="Child studying animation" />
                            </div>
                        </div>
                    </div>

                    {/* Combined Section - Features, Statistics, and App Download */}
                    <div className="combined-section">
                        {/* Feature Cards Section */}
                        <div className="cards-row d-flex justify-content-center mb-5">
                            <div className="card" style={{ width: "22rem", border: "none" }}>
                                <img src="../images/live-classes.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Daily live classes</h4>
                                    <p className="card-text">Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
                                </div>
                            </div>

                            <div className="card" style={{ width: "22rem", border: "none" }}>
                                <img src="../images/revise.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Practice and revise</h4>
                                    <p className="card-text">Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
                                </div>
                            </div>

                            <div className="card" style={{ width: "22rem", border: "none" }}>
                                <img src="../images/learn.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Learn anytime, anywhere</h4>
                                    <p className="card-text">One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
                                </div>
                            </div>

                            <div className="card" style={{ width: "22rem", border: "none" }}>
                                <img src="../images/expert.jpg" className="card-img-top" alt="Expert guidance" />
                                <div className="card-body">
                                    <h4 className="card-title">Expert guidance</h4>
                                    <p className="card-text">Get personalized mentorship from industry experts and experienced educators to accelerate your learning journey</p>
                                </div>
                            </div>
                        </div>

                        {/* Start Learning Statistics Section */}
                        <div className="statistics-section d-flex flex-column align-items-center text-center mb-5 py-5">
                            <div className="section-header mb-5">
                                <h1 className="mb-3">Start Learning with ExamElevate</h1>
                                <p className="mb-4">Get unlimited access to structured courses & doubt clearing sessions</p>
                                <Link to="/explore"><button type="button" className="btn btn-success">Start learning</button></Link>
                            </div>

                            <div className="statistics-cards d-flex justify-content-center flex-wrap gap-4">
                                <div className="stat-card bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '250px', height: '150px' }}>
                                    <img src="/images/courses.png" alt="courses" style={{ width: '100%', height: '100%', objectFit: 'contain', border: '2px solid white' }} />
                                </div>

                                <div className="stat-card bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '250px', height: '150px' }}>
                                    <img src="/images/live-session.png" alt="live classes" style={{ width: '100%', height: '100%', objectFit: 'contain', border: '2px solid white' }} />
                                </div>

                                <div className="stat-card bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '250px', height: '150px' }}>
                                    <img src="/images/educators.png" alt="educators" style={{ width: '100%', height: '100%', objectFit: 'contain', border: '2px solid white' }} />
                                </div>

                                <div className="stat-card bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '250px', height: '150px' }}>
                                    <img src="/images/mins-watched.png" alt="minutes watched" style={{ width: '100%', height: '100%', objectFit: 'contain', border: '2px solid white' }} />
                                </div>

                                <div className="stat-card bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '250px', height: '150px' }}>
                                    <img src="/images/video-lessons.png" alt="video lessons" style={{ width: '100%', height: '100%', objectFit: 'contain', border: '2px solid white' }} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
