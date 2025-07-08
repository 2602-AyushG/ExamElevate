import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/studymaterial.css";
import studyMaterialContext from "../context/studymaterial/studyMaterialContext";

export default function StudyMaterial() {
  let { subject } = useParams();
  const material = useContext(studyMaterialContext);
  const { content, fetchContent } = material;
  const data = [
        "Arrays",
        "Linked Lists",
        "Binary Tree",
        "Graphs",
        "Binary Search",
        "DP",
        "Trie",
        "Heaps",
  ];
  useEffect(() => {
    fetchContent(subject);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="text-muted row container my-5 m-auto">
        <div className="col-md-9">
          <h1 className="d-block text-center mb-4">
            {content && content.course.course_id} Study Material
          </h1>
          <span className="text-decoration-underline" style={{ fontWeight: "bolder" }}>About {content && content.course.course_name}</span>
          <div className="my-4">
            <p>{content && content.course.course_description}</p>
          </div>

          <span className="text-decoration-underline" style={{ fontWeight: "bolder" }}> Topic List </span>

          <div className="d-flex justify-content-start flex-wrap my-4">
            {data.map((item, index) => {
                return (
                    <div className="card goals text-muted ms-3 mb-3 d-flex flex-row justify-content-center align-items-center" key={index}>
                      <div className="ms-3 d-flex justify-content-center align-items-center" style={{ border: "1px solid black", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "cyan"}}>
                        <div><h3>{item[0]}</h3></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                      </div>
                    </div>
                );
            })}
          </div>
        </div>

        {/* Div for Related Links */}
        <div className="col-md-3 border border-5 overflow-scroll relatedLinks">
          <h3 className="text-center my-4">Related Links</h3>
          {content.links.map((element, index) => {
            return (
              <iframe className="w-100" src={element.link} title={element.title} key={index} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            );
          })}
        </div>
      </div>
    </>
  );
}