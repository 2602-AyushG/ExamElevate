import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/explore.css"
export default function Explore() {
    const data = [
        ["Computer Engineering", [
            "DSA",
            "OS",
            "COA",
            "DBMS",
            "ADA",
            "CN",
            "OOP"
        ]],
        ["Information Technology", [
            "DSA",
            "IT",
            "DBMS",
            "OS",
            "COA",
            "CN",
            "OOP",
            "ADA"
        ]],
        ["Software Engineering", [
            "DSA",
            "OS",
            "COA",
            "DBMS",
            "ADA",
            "ML",
            "OOP",
            "SE",
            "OOSE"
        ]],
        ["Mathematics and Computing", [
            "Finance",
            "Probability",
            "DSA",
            "OS",
            "COA",
            "DBMS",
            "ADA",
            "Stastics"
        ]],
        ["Electronics and Communication Engineering", [
            "COA",
            "Digital",
            "Analog",
            "ADA",
            "CN",
            "EE",
            "Networking"
        ]]
    ];
    return (
        <>
            <div className="container-fluid explore-background d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div><h1 className='text-muted'>Choose your goal</h1></div>
            </div>
            <div id = "mainExploreContent" className = "container my-5">
                {data.map((item, index) => {
                    return  (
                        <div className="my-5" key={index}>
                            <p className='text-muted ms-4'>{item[0]}</p>
                            <div className="d-flex justify-content-start flex-wrap">
                                {item[1].map((item2, index2) => {
                                    return (
                                        <div className="card goals text-muted ms-3 mb-3" key={index2}>
                                            <Link to={`/goal/${item2}`} className='text-decoration-none link-secondary'>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item2}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
