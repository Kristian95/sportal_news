import React from 'react';
 
const News = ({ id, name ,text }) => (
    <div key={id} className="card col-md-4" style={{width:200}}>
        <div className="card-body">
            <p>{id}</p>
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{text}</p>
        </div>
    </div>
);

export default News;