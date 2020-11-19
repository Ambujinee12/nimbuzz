import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.metadata_storage_path}`}>
            <img className="card-img-top" src={props.document.file_path} alt={props.document.file_path}></img>
            <div className="card-body">
                <h6 className="title-style">{props.document.metadata_title}</h6>
            </div>
        </a>
    </div>
    );
}
