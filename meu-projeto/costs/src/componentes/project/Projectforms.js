import Input from '../forms/Input'
import Select from '../forms/Select'
import Submit from '../forms/Submits'

import styles from './Projectforms.module.css'


function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type="text" 
            text="Nome do Projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            />
            <Input type="number" 
            text="Orçamento do projeto"
            name="budget"
            placeholder="Insira o orçamento total"
            />
            <div>
            <Select name="category_id" text="Selecione a categoria"/>
            </div>
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm