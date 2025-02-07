import 'bootstrap/dist/css/bootstrap.min.css';
import './UserProfileStyle.css';
import UserProfileScript from './UserProfileScript';
import Btn from '../../props/button/Btn';

const UserProfile = () => {

    const { data, professions, experience, education, deleteUser } = UserProfileScript();

    if (!data) {
        return (
            <h1>Cargando</h1>
        );
    }

    return (
        <div className="container user-profile-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
            <div className='card user-profile-card'>

                <div className='card-body user-profile-user-data'>
                    <h2 className="card-title">
                        {data.name + " " + data.last_name}
                    </h2>
                    <figure>
                        <img className='card-img-top user-photo-card' src={data.photo} alt="foto de usuario" />
                    </figure>
                    <h3 className="card-subtitle mb-2 text-muted">
                        {professions()}
                    </h3>
                    <div>
                        <p className="card-text">
                            <strong>Email: {data.email}</strong>
                        </p>
                        <p className="card-text">
                            <strong>Phone: {data.phone}</strong>
                        </p>
                    </div>
                </div>

                <div className='card-body user-profile-user-desc'>
                    <section>
                        <h3>About me</h3>
                        <p className="card-text">
                            {data.aboutMe}
                        </p>
                    </section>
                    <div>
                        <section>
                            <h3>Experience</h3>
                            {experience()}
                        </section>
                        <section>
                            <h3>Educación</h3>
                            {education()}
                        </section>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Btn title="Editar" style="btn btn-primary me-2" to={`/app/userEditProfile/${data.id}`} />
                        <Btn title="Eliminar" style="btn btn-danger" onClick={deleteUser} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;