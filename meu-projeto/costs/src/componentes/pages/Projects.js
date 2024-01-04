import { useLocation} from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../layout/Message"
import Container from "../layout/Container"
import Linkbutton from "../layout/Linkbutton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loader"

function Projects (){
    const [projects, setProjects] = useState([])
    const [removeloader, setRemoveLoader] = useState(false)

    const location = useLocation()
    
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{
        setTimeout (
            () => {
                fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then((data) =>{
            setProjects(data)
            setRemoveLoader(true)
        }).catch((err) => console.log(err))
            }, 300)
    }, [])


    function removeProject (id){
    
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 
        }
        
        )
    }

    return (
        <div className={styles.projectcontainer}>
            <div className={styles.titlecontainer}>
            <h1>Meus Projetos</h1>
            <Linkbutton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project?.category?.name}
                        key={project.id}
                    />)}
                    {!removeloader && <Loading/>}
                    
       </Container>
        </div>
    )
}
export default Projects