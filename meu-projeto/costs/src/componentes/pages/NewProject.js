import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/Projectforms'
import styles from './Newproject.module.css'

function NewProject (){

    const history = useNavigate()

    function createPost(project){
        
        // initilize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history('/Projects',{state: {message: 'Projeto criado com sucesso'}})
        })

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulario</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject