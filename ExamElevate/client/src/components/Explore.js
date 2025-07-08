import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/explore.css"
export default function Explore() {
    const subjectDescriptions = {
        "DSA": "Data Structures & Algorithms",
        "OS": "Operating Systems",
        "COA": "Computer Organization & Architecture",
        "DBMS": "Database Management Systems",
        "ADA": "Algorithm Design & Analysis",
        "CN": "Computer Networks",
        "OOP": "Object Oriented Programming",
        "IT": "Information Technology",
        "ML": "Machine Learning",
        "SE": "Software Engineering",
        "OOSE": "Object Oriented Software Engineering",
        "Finance": "Financial Mathematics",
        "Probability": "Probability Theory",
        "Stastics": "Statistics",
        "Digital": "Digital Electronics",
        "Analog": "Analog Electronics",
        "EE": "Electrical Engineering",
        "Networking": "Network Engineering"
    };

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
            <div className="container-fluid explore-background d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <div><h1>Choose your goal</h1></div>
            </div>
            <div id="mainExploreContent" className="container my-5">
                {data.map((item, index) => {
                    return (
                        <div className="my-5" key={index}>
                            <div 
                                className="category-title"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {item[0]}
                            </div>
                            <div className="goals-container">
                                {item[1].map((item2, index2) => {
                                    return (
                                        <Link to={`/goal/${item2}`} className='text-decoration-none' key={index2}>
                                            <div 
                                                className="card goals" 
                                                style={{ animationDelay: `${(index * item[1].length + index2) * 0.1}s` }}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">{item2}</h5>
                                                    <p className="card-description">{subjectDescriptions[item2] || item2}</p>
                                                </div>
                                            </div>
                                        </Link>
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
