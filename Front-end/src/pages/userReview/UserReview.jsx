

import './UserReviewStyle.css'

import UserReviewScript from './UserReviewScript';

const UserReview = () => {

    const { data, professions, DeleteUser } = UserReviewScript();

    if (!data) {
        return (
            <h1>Cargando</h1>
        );
    }

    return (
        <div className="user-profile-container">
            <div className='user-profile-card'>

                <div className='user-profile-user-data'>
                    <h2>
                        {data.name + " " + data.last_name}
                    </h2>
                    <figure>
                        <img className='user-photo-card' src={data.photo} alt="foto de usuario" />
                    </figure>
                    <h3>
                        {professions()}
                    </h3>
                    <div>
                        <p>
                            <strong>Email: {data.email}</strong>
                        </p>
                        <p>
                            <strong>Phone: {data.phone}</strong>
                        </p>
                    </div>
                </div>

                <div className='user-profile-user-desc'>
                    <section>
                        <h3>About me</h3>
                        <p>
                            {data.aboutMe}
                        </p>
                    </section>
                </div>

                <div className='buttContainerProfile'>
                    <button onClick={DeleteUser} className='btnNoCountry'>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default UserReview;
