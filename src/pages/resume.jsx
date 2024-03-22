import { Link } from 'react-router-dom';
import { studies, experiences} from '../data/resume';

function Resume() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
            </ul>
            
            <h2>Estudios:</h2>
            {studies.map((study) => (
                <div  key={study.id}>
                    <p>{study.title}</p>
                    <p>{study.institution}</p>
                    <p>{study.date}</p>
                </div>
            ))}
            
            <h2>Experiencia:</h2>
            {experiences.map((experience) => (
                <div  key={experience.id}>
                    <p>{experience.title}</p>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>
                </div>
            ))}
        </>
    )
}

export default Resume;