import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const UserProfileScript = () => {
    const data = useSelector(store => store.userReducer);

    const id = useParams()

    const professions = data.user.profession.map((prof) => prof + "").join(" - ");

    const experience = data.user.experience.map((exp) => (
        <p key={exp.position}>
            {exp.company} - {exp.position} - {exp.date}
        </p>
    ));

    const education = data.user.education.map((edu) => (
        <p key={edu.degree}>
            {edu.degree} - {edu.school} - {edu.date}
        </p>
    ));

    const cv = data.user.cv != "" ? (
        <article>
            <h3>Curriculum</h3>
            <figure>
                <a href={data.user.cv} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=104082&format=png&color=000000" alt="CV Icon" />
                </a>
            </figure>
        </article>
    ) : null;

    return {
        data,
        professions,
        experience,
        education,
        cv
    };
}

export default UserProfileScript;
