import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from "../button/Btn";

import './ListWorkStyle.css';

const ListWork = ({ data }) => {
    if (!Array.isArray(data)) {
        console.error("data is not an array:", data);
        return <p>No hay trabajos disponibles para mostrar.</p>;
    }

    const renderList = data.map(item => (
        <div className="col-md-4 mb-4" key={item.id}>
            <div className="card work-card">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <Btn title="Más info" to={`/app/workDetail/${item.id}`} style="btn-custom"  />
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container ListWork-container">
            <div className="row">
                {renderList}
            </div>
        </div>
    );
};

export default ListWork;
