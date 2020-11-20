import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.file_path}`}>
            <div className="card-body">
                <h6 className="title-style">{props.document.metadata_storage_name}</h6>
            </div>
        </a>
    </div>
    );
}
