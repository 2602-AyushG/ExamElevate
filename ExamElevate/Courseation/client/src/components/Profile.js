import React from 'react'

export default function Profile(props) {
    return (
        <>
            <div className="container my-5 p-5 d-flex flex-row" style={{ height: "300px", boxShadow: "16px 16px 32px 32px rgba(233, 238, 242, 0.4)" }}>
                <div className="card" style={{width: '14rem', border: '0px'}}><img src="../images/profile.png" className="card-img-top" alt="..." /></div>
                <div className="d-flex flex-column ms-3 text-muted">
                    <h1>{props.username}</h1>
                    <p>{props.emailid}</p>
                </div>
                <h3><span className="ms-2 mt-2 badge bg-secondary">Student</span></h3>
            </div>
        </>
    )
}
