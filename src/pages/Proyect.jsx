import projects from '../data/projects';
import { Link } from 'react-router-dom';

function Projects(){
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/resume`}>Resume</Link></li>
            </ul>
            <h2>Proyectos del trabajador</h2>
            {projects.map((project) =>(
                <div key={project.id}>
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                    <a href={project.url}>Ir</a>
                    <img src={project.image} alt={project.name}></img>
                </div>
            ))}
        </>
    );
}


export default Projects