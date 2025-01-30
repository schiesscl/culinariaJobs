import Btn from '../../props/button/Btn';
import { useSelector } from 'react-redux';

import './UserProfileStyle.css'

import UserProfileScript from './UserProfileScript'

const userProfile = () => {

    const { data, professions, experience, education, cv } = UserProfileScript();

    const id = useSelector(store => store.userReducer.user.id)


    return (
        <div className="user-profile-container">
            <div className='user-profile-card'>
                <div className='user-profile-user-data'>
                    <h2>
                        {data.user.name + " " + data.user.lastName}
                    </h2>
                    <figure>
                        <img className='user-photo-card' src={data.user.photo} alt="" />
                    </figure>
                    <h3>
                        {professions}
                    </h3>
                    <div>
                        <p>
                            <strong>Email: {data.user.email} </strong>
                        </p>
                        <p>
                            <strong>Phone: {data.user.phone} </strong>
                        </p>
                    </div>
                </div>

                <div className='user-profile-user-desc'>
                    <section>
                        <h3>About me</h3>
                        <p>
                            {data.user.aboutMe}
                        </p>
                    </section>
                    <div>
                        <section>
                            <h3>Experience</h3>
                            {experience}
                        </section>
                        <section>
                            <h3>Education</h3>
                            {education}
                        </section>
                    </div>
                    <section>
                        {cv}
                    </section>
                </div>
                <div className='buttContainerProfile'>
                    <Btn title="Editar" to={`/app/userEditProfile/${id}`} />
                    <button className='btnNoCountry'>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default userProfile