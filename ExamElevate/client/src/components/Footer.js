import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <>
            {/* Footer starts */}
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            {/* Company */}
                            <h5>Company</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="about" className="nav-link p-0 text-muted">About Us</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">Careers</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">Blogs</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">Privacy Policy</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">Terms and Conditions</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            {/* Study Material */}
                            <h5>Study Material</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">DSA Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">ADA Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">OS Study Material</Link></li>
                                <li className="nav-item mb-2"><Link to="/comingsoon" className="nav-link p-0 text-muted">CN Study Material</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            {/* Newletter subscription form */}
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-success" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        {/* Copyright Disclaimer */}
                        <p className='text-muted'>© 2023 Courseation Pvt Ltd</p>
                        {/* Social Media logos */}
                        {/* <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                        </ul> */}
                    </div>
                </footer>
            </div>
            {/* Footer ends */}
        </>
    )
}
