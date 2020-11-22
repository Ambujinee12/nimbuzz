import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
        <div class="card text-white bg-info mb-3" style="max-width: 25rem;">
        <a href={`${props.document.file_path}`}>
            <div class="card-header">
                <h6 class="title-style">{props.document.metadata_storage_name}</h6>
            </div>
        </a>
        <div class="card-body">
                   <p class="card-text">Location : {props.document.location} </p>
                  <p class="card-text">Equipment : {props.document.equipment} </p>
                  <p class="card-text">Filetype : {props.document.filetype} </p>
                 <p class="card-text">Last Modified : {props.document.metadata_storage_last_modified}</p>      
        </div>
    </div>
    );
}
