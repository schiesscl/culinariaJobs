import Btn from '../../props/button/Btn';

import './UserProfileStyle.css'

import UserProfileScript from './UserProfileScript'

const UserProfile = () => {

    const { data, professions, experience, education, cv } = UserProfileScript();

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
                    <div>
                        <section>
                            <h3>Experience</h3>
                            {experience()}
                        </section>
                        <section>
                            <h3>Education</h3>
                            {education()}
                        </section>
                    </div>
                    <section>
                        {cv()}
                    </section>
                </div>

                <div className='buttContainerProfile'>
                    <Btn title="Editar" to={`/app/userEditProfile/${data.id}`} />
                    <button className='btnNoCountry'>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
