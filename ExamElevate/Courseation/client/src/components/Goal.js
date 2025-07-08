import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles/goal.css"

export default function Goal() {
    let { id } = useParams();
    const topicsData = [
        ["Binary Search", "A searching algorithm used in a sorted array by repeatedly dividing the search interval in half."],
        ["Binary Trees", "A rooted tree that is also an ordered tree (a.k.a. plane tree) in which every node has at most two children."],
        ["Graphs", "A non-linear data structure consisting of vertices and edges."],
        ["Heaps", " A special Tree-based data structure in which the tree is a complete binary tree."],
        ["Recursion", "Functions that call themselves from within their own code."]
    ];
    const educatorsData = [
        ["Striver", "Specialised in Dynammic Programming"],
        ["Aditya Verma", "Specialised in Graphs"],
        ["Nishant Chahar", "Specialised in Linked Lists"],
        ["Love Babbar", "Specialised in Greedy Algorithms"],
        ["Abdul Bari", "Specialised in Heaps"]
    ];
    return (
        <>
            <div className="container my-5">
                <div className="study-with-courseation d-flex flex-column">
                    <div className="heading-study-with-courseation ms-4" style={{ width: "30%" }}>
                        <h1>Study {id} with Courseation</h1>
                    </div>
                    <div className="subheading-study-with-courseation ms-4">
                        <p>Over 8,00,000 learners trust us for online and offline coaching</p>
                    </div>
                </div>
                <div className="classes-of-the-goal container my-5">
                    {/* Classes by topics */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {id} topics</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            {topicsData.map((item, index) => {
                                return (
                                    <Link to={`/class/${item[0]}`} className='text-decoration-none link-secondary' key={index}>
                                        <div className="card goal-cards text-muted ms-3 mb-3">
                                            <img src="../images/teacher.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item[0]}</h5>
                                                <p className="card-text">{item[1]}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    {/* Classes by educators */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {id} educators</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            {educatorsData.map((item, index) => {
                                return (
                                    <Link to={`/class/${id}`} className='text-decoration-none link-secondary' key={index}>
                                        <div className="card goal-cards text-muted ms-3 mb-3">
                                            <img src="../images/teacher.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item[0]}</h5>
                                                <p className="card-text">{item[1]}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
