import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
        
       [
  'Info'
  
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header> <a href={`${props.document.file_path}`}>
            <div className="card-header">
                <h6 className="title-style">{props.document.metadata_storage_name}</h6>
            </div>
        </a> </Card.Header>

    <Card.Body>
      <Card.Text>
                  <p className="card-text">Location : {props.document.location} </p>
                  <p className="card-text">Equipment : {props.document.equipment} </p>
                  <p className="card-text">Filetype : {props.document.filetype} </p>
                 <p className="card-text">Last Modified : {props.document.metadata_storage_last_modified}</p>     
      </Card.Text>
    </Card.Body>
  </Card>
))
    );
}


