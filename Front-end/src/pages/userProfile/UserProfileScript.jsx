import { useSelector } from "react-redux"

const UserProfileScript = () => {
    const data = useSelector(store => store.userReducer.user);

    console.log(data)

    const professions = () => {
        if (data.profession == null) {
            return "Sin profesión";
        } else {
            return data.profession.map((prof) => prof + "").join(" - ");
        }
    }


    const experience = () => {
        if (data.experience == null) {
            return (
                <p key="sin_experiencia">
                    Sin experiencia
                </p>
            );
        } else {
            return data.experience.map((exp) => (
                <p key={exp.position}>
                    {exp.company} - {exp.position} - {exp.date}
                </p>
            ));
        }
    }

    const education = () => {
        if (data.education == null) {
            return (
                <p key="sin_formacion">
                    Sin formacion academica
                </p>
            )
        } else {
            return data.user.education.map((edu) => (
                <p key={edu.degree}>
                    {edu.degree} - {edu.school} - {edu.date}
                </p>
            ));
        }
    }

    const cv = () => {
        if (data.cv == null) {
            return null
        } else {
            return (
                <article key="curriculum">
                    <h3>Curriculum</h3>
                    <figure>
                        <a href={data.cv} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=104082&format=png&color=000000" alt="CV Icon" />
                        </a>
                    </figure>
                </article>
            );
        }
    };


    return {
        data,
        professions,
        experience,
        education,
        cv
    };
}

export default UserProfileScript;
