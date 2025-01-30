import Btn from "../button/Btn";

const ListUser = ({ data }) => {


    const renderList = data.map(user => (
        <div key={user.id}>
            <div>
                <h2>{`${user.name} ${user.lastName}`}</h2>
                <figure>
                    <img src={user.photo} alt={`${user.name} ${user.lastName}`} />
                </figure>
                <p>{user.profession.join(" - ")}</p>
            </div>
            <div>
                <Btn title="mas info" to={`/app/userReview/${user.id}`} />
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