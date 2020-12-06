import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div>
            <input className="form-control" {...props}/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <div className="input-group-append">
            <button className="searchbtn" {...props}>Submit</button>
        </div>
    );
}