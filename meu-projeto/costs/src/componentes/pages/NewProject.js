import ProjectForm from '../project/Projectforms'
import styles from './Newproject.module.css'

function NewProject (){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulario</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject