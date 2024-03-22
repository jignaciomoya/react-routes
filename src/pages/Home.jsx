import {Link} from 'react-router-dom';

function Home() {
  
    return(
        <>
        <h1>Selecciona la opción que desees</h1>
        <ul>
                <li><Link to={`/projects/`}>Projects</Link></li>
                <li><Link to={`/resume/`}>Resume</Link></li>
        </ul>
        </>
    );
}

export default Home;