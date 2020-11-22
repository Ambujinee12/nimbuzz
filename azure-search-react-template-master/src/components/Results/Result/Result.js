import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result"> 
    <a href={`${props.document.file_path}`}>
            <div className="card-header">
                <h6 className="title-style">{props.document.metadata_storage_name}</h6>
            </div>
        </a>

    <div className="card-body">
                   <p >Location : {props.document.location} </p>
                  <p >Equipment : {props.document.equipment} </p>
                  <p >Filetype : {props.document.filetype} </p>
                    
        </div>
</div>

    );
}


