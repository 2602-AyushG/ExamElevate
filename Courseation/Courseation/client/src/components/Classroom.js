import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";

const Classroom = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <input type="text" value = {value} onChange = {(e) => setValue(e.target.value)} placeholder="Enter Room Code" />
                <button className="mx-3 btn btn-outline-success" onClick = {handleJoinRoom} >Join</button>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <p className="font-weight-light">PS: You can enter first 3 letters of the chosen course</p>
            </div>
        </>
    );
}

export default Classroom;