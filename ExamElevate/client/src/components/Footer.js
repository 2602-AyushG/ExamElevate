import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <>
            {/* Footer starts */}
            <div className="container-fluid" style={{ backgroundColor: '#1e3a8a' }}>
                <div className="container">
                    <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            {/* Company */}
                            <h5 style={{ color: 'white' }}>Company</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="about" className="nav-link p-0" style={{ color: '#d1d5db' }}>About Us</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>Careers</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>Blogs</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>Privacy Policy</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>Terms and Conditions</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            {/* Study Material */}
                            <h5 style={{ color: 'white' }}>Study Material</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>DSA Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>ADA Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>OS Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0" style={{ color: '#d1d5db' }}>CN Study Material</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            {/* Newletter subscription form */}
                            <form>
                                <h5 style={{ color: 'white' }}>Subscribe to our newsletter</h5>
                                <p style={{ color: '#d1d5db' }}>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-success" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" style={{ borderColor: '#374151 !important' }}>
                        {/* Copyright Disclaimer */}
                        <p style={{ color: '#d1d5db' }}>© 2023 ExamElevate Pvt Ltd</p>
                        {/* Social Media logos */}
                        {/* <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                        </ul> */}
                    </div>
                </footer>
                </div>
            </div>
            {/* Footer ends */}
        </>
    )
}
