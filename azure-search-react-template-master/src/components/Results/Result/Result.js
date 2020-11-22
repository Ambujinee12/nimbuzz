import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
        <div className="card text-white bg-info mb-3" style="max-width: 25rem;">
        <a href={`${props.document.file_path}`}>
            <div className="card-header">
                <h6 className="title-style">{props.document.metadata_storage_name}</h6>
            </div>
        </a>
        <div className="card-body">
                   <p className="card-text">Location : {props.document.location} </p>
                  <p className="card-text">Equipment : {props.document.equipment} </p>
                  <p className="card-text">Filetype : {props.document.filetype} </p>
                 <p className="card-text">Last Modified : {props.document.metadata_storage_last_modified}</p>      
        </div>
    </div>
    );
}
