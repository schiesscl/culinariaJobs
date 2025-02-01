import Btn from "../button/Btn";

import './ListUserStyle.css'

const ListUser = ({ data }) => {


    const renderList = data.map(user => (
        <div key={user.id} className="container-user">
            <div>
                <h2>{`${user.name} ${user.lastName}`}</h2>
                <figure className="container-user-photo">
                    <img className="user-photo" src={user.photo} alt={`${user.name} ${user.lastName}`} />
                </figure>
                <p>{user.profession.join(" - ")}</p>
                <Btn title="Ver usuario" to={`/app/userReview/${user.id}`} />
            </div>
        </div>
    ));

    return (
        <>
            {renderList}
        </>
    );
};

export default ListUser;