import React, { useState } from "react";
import StudyMaterialContext from "./studyMaterialContext";

const StudyMaterialState = (props) => {
    // const host = "https://courseation-backend.vercel.app";
    const host = "http://localhost:8000";
    let initial = {
        "course": {
            "course_id": "...",
            "course_name": "...",
            "course_description": "..."
        },
        "links": [
            {
                "link_address": "..."
            },
            {
                "link_address": "..."
            },
            {
                "link_address": "..."
            },
            {
                "link_address": "..."
            },
            {
                "link_address": "..."
            }
        ]
    };
    const [content, setContent] = useState(initial);


    // Get all content related to the course_id
    const fetchContent = async (subject) => {
        // console.log("entered func")
        let url = `${host}/studyMaterial/${subject}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        setContent(data);
        console.log("content is: ", data)
    }


    return (
        <StudyMaterialContext.Provider value={{ content, setContent, fetchContent }}>
            {props.children}
        </StudyMaterialContext.Provider>
    )
}

export default StudyMaterialState;