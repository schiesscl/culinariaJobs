import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from "../button/Btn";

import './ListUserStyle.css'

const ListUser = ({ data }) => {
    return (
        <div className="container">
            <div className="row">
                {data.map(user => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card user-card">
                            <img src={user.photo} className="card-img-top" alt={user.name} />
                            <div className="card-body">
                                <h5 className="card-title">{`${user.name} ${user.lastName}`}</h5>
                                <p className="card-text">{user.profession.join(" - ")}</p>
                                <a href={`/user/${user.id}`} className="btn btn-dark">Ver perfil</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListUser;